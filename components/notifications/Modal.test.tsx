import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Modal } from './Modal';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

const TestModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Test Modal">
    <p>Modal Content</p>
  </Modal>
);

describe('Modal', () => {
  it('renders modal when isOpen is true', () => {
    render(
      <TestWrapper>
        <TestModal isOpen onClose={jest.fn()} />
      </TestWrapper>,
    );
    expect(screen.getByText(/test modal/i)).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('does not render modal when isOpen is false', () => {
    render(
      <TestWrapper>
        <TestModal isOpen={false} onClose={jest.fn()} />
      </TestWrapper>,
    );
    expect(screen.queryByText(/test modal/i)).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <TestModal isOpen onClose={handleClose} />
      </TestWrapper>,
    );
    const closeButton = screen.getByLabelText(/close modal/i);
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('calls onClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Modal isOpen onClose={handleClose} title="Test" closeOnOverlayClick>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Modal isOpen onClose={handleClose} title="Test" closeOnOverlayClick={false}>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <TestModal isOpen onClose={handleClose} />
      </TestWrapper>,
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalled();
  });

  it('does not call onClose when Escape is pressed and closeOnEscape is false', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Modal isOpen onClose={handleClose} title="Test" closeOnEscape={false}>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders modal with footer', () => {
    render(
      <TestWrapper>
        <Modal isOpen onClose={jest.fn()} title="Test" footer={<button>Footer</button>}>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it('renders modal without title', () => {
    render(
      <TestWrapper>
        <Modal isOpen onClose={jest.fn()}>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders modal without close button when showCloseButton is false', () => {
    render(
      <TestWrapper>
        <Modal isOpen onClose={jest.fn()} title="Test" showCloseButton={false}>
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    expect(screen.queryByLabelText(/close modal/i)).not.toBeInTheDocument();
  });

  it('applies different sizes', () => {
    const { rerender } = render(
      <TestWrapper>
        <Modal isOpen onClose={jest.fn()} title="Test" size="small">
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    rerender(
      <TestWrapper>
        <Modal isOpen onClose={jest.fn()} title="Test" size="large">
          <p>Content</p>
        </Modal>
      </TestWrapper>,
    );
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <TestModal isOpen onClose={jest.fn()} />
      </TestWrapper>,
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
  });
});

