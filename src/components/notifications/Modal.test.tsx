import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';
import { vi } from 'vitest';

const TestModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Test Modal">
    <p>Modal Content</p>
  </Modal>
);

describe('Modal', () => {
  it('renders modal when isOpen is true', () => {
    render(
      <TestModal isOpen onClose={vi.fn()} />
    );
    expect(screen.getByText(/test modal/i)).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('does not render modal when isOpen is false', () => {
    render(
      <TestModal isOpen={false} onClose={vi.fn()} />
    );
    expect(screen.queryByText(/test modal/i)).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(
        <TestModal isOpen onClose={handleClose} />
    );
    const closeButton = screen.getByLabelText(/close modal/i);
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 500 });
  });

  it('calls onClose when overlay is clicked', async () => {
    const handleClose = vi.fn();
    render(
        <Modal isOpen onClose={handleClose} title="Test" closeOnOverlayClick>
          <p>Content</p>
        </Modal>
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 500 });
  });

  it('does not call onClose when overlay is clicked and closeOnOverlayClick is false', () => {
    const handleClose = vi.fn();
    render(
        <Modal isOpen onClose={handleClose} title="Test" closeOnOverlayClick={false}>
          <p>Content</p>
        </Modal>
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', async () => {
    const handleClose = vi.fn();
    render(
        <TestModal isOpen onClose={handleClose} />
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 500 });
  });

  it('does not call onClose when Escape is pressed and closeOnEscape is false', () => {
    const handleClose = vi.fn();
    render(
        <Modal isOpen onClose={handleClose} title="Test" closeOnEscape={false}>
          <p>Content</p>
        </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders modal with footer', () => {
    render(
      <Modal isOpen onClose={vi.fn()} title="Test" footer={<button type="button">Footer</button>}>
          <p>Content</p>
        </Modal>
    );
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it('renders modal without title', () => {
    render(
      <Modal isOpen onClose={vi.fn()}>
          <p>Content</p>
        </Modal>
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders modal without close button when showCloseButton is false', () => {
    render(
      <Modal isOpen onClose={vi.fn()} title="Test" showCloseButton={false}>
          <p>Content</p>
        </Modal>
    );
    expect(screen.queryByLabelText(/close modal/i)).not.toBeInTheDocument();
  });

  it('has proper aria attributes', () => {
    render(
      <TestModal isOpen onClose={vi.fn()} />
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
  });
});
