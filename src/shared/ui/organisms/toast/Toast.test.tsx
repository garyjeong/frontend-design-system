import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Toast } from './Toast';
import { vi } from 'vitest';

describe('Toast', () => {
  // ... (other tests remain the same) ...

  it('calls onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(
        <Toast id="1" message="Test" onClose={handleClose} />
    );
    const closeButton = screen.getByLabelText(/close toast/i);
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledWith('1');
    }, { timeout: 500 });
  });

  it('auto-closes after duration', () => {
    vi.useFakeTimers();
    const handleClose = vi.fn();
    render(
      <Toast id="1" message="Test" duration={1000} onClose={handleClose} />
    );
    expect(handleClose).not.toHaveBeenCalled();

    // Wrap the code that causes state updates in act()
    act(() => {
      vi.runAllTimers();
    });
    
    expect(handleClose).toHaveBeenCalledWith('1');

    vi.useRealTimers();
  });

  it('does not auto-close when duration is 0', () => {
    vi.useFakeTimers();
    const handleClose = vi.fn();
    render(
        <Toast id="1" message="Test" duration={0} onClose={handleClose} />
    );
    
    act(() => {
        vi.advanceTimersByTime(5000);
    });

    expect(handleClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  // ... (other tests remain the same) ...
});
