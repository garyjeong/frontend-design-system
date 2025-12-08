import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Modal } from './Modal';
import { vi } from 'vitest';

const TestModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <Modal open={open} onClose={onClose}>
    <Modal.Title>Test Modal</Modal.Title>
    <Modal.Content>
      <p>Modal Content</p>
    </Modal.Content>
  </Modal>
);

describe('Modal', () => {
  it('renders modal when open is true', () => {
    render(
      <TestModal open onClose={vi.fn()} />
    );
    expect(screen.getByText(/test modal/i)).toBeInTheDocument();
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it('does not render modal when open is false', () => {
    render(
      <TestModal open={false} onClose={vi.fn()} />
    );
    expect(screen.queryByText(/test modal/i)).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(
        <TestModal open onClose={handleClose} />
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
        <Modal open onClose={handleClose} closeOnOverlayClick>
          <Modal.Title>Test</Modal.Title>
          <Modal.Content>
            <p>Content</p>
          </Modal.Content>
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
        <Modal open onClose={handleClose} closeOnOverlayClick={false}>
          <Modal.Title>Test</Modal.Title>
          <Modal.Content>
            <p>Content</p>
          </Modal.Content>
        </Modal>
    );
    const overlay = screen.getByRole('dialog');
    fireEvent.click(overlay);
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', async () => {
    const handleClose = vi.fn();
    render(
        <TestModal open onClose={handleClose} />
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 500 });
  });

  it('does not call onClose when Escape is pressed and closeOnEscape is false', () => {
    const handleClose = vi.fn();
    render(
        <Modal open onClose={handleClose} closeOnEscape={false}>
          <Modal.Title>Test</Modal.Title>
          <Modal.Content>
            <p>Content</p>
          </Modal.Content>
        </Modal>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders modal with footer', () => {
    render(
      <Modal open onClose={vi.fn()}>
        <Modal.Title>Test</Modal.Title>
        <Modal.Content>
          <p>Content</p>
        </Modal.Content>
        <Modal.Footer>
          <button type="button">Footer</button>
        </Modal.Footer>
      </Modal>
    );
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it('renders modal without title', () => {
    render(
      <Modal open onClose={vi.fn()}>
        <Modal.Content>
          <p>Content</p>
        </Modal.Content>
      </Modal>
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders modal without close button when showCloseButton is false', () => {
    render(
      <Modal open onClose={vi.fn()} showCloseButton={false}>
        <Modal.Title>Test</Modal.Title>
        <Modal.Content>
          <p>Content</p>
        </Modal.Content>
      </Modal>
    );
    expect(screen.queryByLabelText(/close modal/i)).not.toBeInTheDocument();
  });

  it('has proper aria attributes', () => {
    render(
      <TestModal open onClose={vi.fn()} />
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby');
  });
});
