import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { ToastProvider, useToast } from './ToastProvider';
import '@testing-library/jest-dom';

const TestComponent = () => {
  const { showToast } = useToast();
  return (
    <button type="button" onClick={() => showToast({ message: 'Test toast' })}>
      Show Toast
    </button>
  );
};

describe('ToastProvider', () => {
  it('renders toast when showToast is called', async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );
    const button = screen.getByText(/show toast/i);
    fireEvent.click(button);
    await screen.findByText(/test toast/i);
    expect(screen.getByText(/test toast/i)).toBeInTheDocument();
  });

  it('removes toast when close button is clicked', async () => {
    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText(/show toast/i));
    
    const toast = await screen.findByText(/test toast/i);
    expect(toast).toBeInTheDocument();

    const closeButton = screen.getByLabelText(/close toast/i);
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(/test toast/i)).not.toBeInTheDocument();
    });
  });

  it('shows multiple toasts', async () => {
    const MultipleToastComponent = () => {
      const { showToast } = useToast();
      return (
        <div>
          <button type="button" onClick={() => showToast({ message: 'Toast 1' })}>
            Show Toast 1
          </button>
          <button type="button" onClick={() => showToast({ message: 'Toast 2' })}>
            Show Toast 2
          </button>
        </div>
      );
    };
    render(
      <ToastProvider>
        <MultipleToastComponent />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByText(/show toast 1/i));
    fireEvent.click(screen.getByText(/show toast 2/i));

    await screen.findByText('Toast 1');
    await screen.findByText('Toast 2');

    expect(screen.getByText('Toast 1')).toBeInTheDocument();
    expect(screen.getByText('Toast 2')).toBeInTheDocument();
  });

  it('throws error when useToast is used outside provider', () => {
    // Suppress console.error output for this test
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    const TestComponentWithoutProvider = () => {
      useToast();
      return <div>Test</div>;
    };

    expect(() => {
      render(<TestComponentWithoutProvider />);
    }).toThrow('useToast must be used within a ToastProvider');

    consoleError.mockRestore();
  });
});

