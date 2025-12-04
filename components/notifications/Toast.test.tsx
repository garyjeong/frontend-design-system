import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { Toast } from './Toast';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Toast', () => {
  it('renders toast with message', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Test message" onClose={handleClose} />
      </TestWrapper>,
    );
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
  });

  it('renders success toast', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Success" type="success" onClose={handleClose} />
      </TestWrapper>,
    );
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });

  it('renders error toast', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Error" type="error" onClose={handleClose} />
      </TestWrapper>,
    );
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Test" onClose={handleClose} />
      </TestWrapper>,
    );
    const closeButton = screen.getByLabelText(/close toast/i);
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledWith('1');
    }, { timeout: 500 });
  });

  it('auto-closes after duration', async () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Test" duration={1000} onClose={handleClose} />
      </TestWrapper>,
    );
    expect(handleClose).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledWith('1');
    });
    jest.useRealTimers();
  });

  it('does not auto-close when duration is 0', () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Test" duration={0} onClose={handleClose} />
      </TestWrapper>,
    );
    jest.advanceTimersByTime(5000);
    expect(handleClose).not.toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('has proper aria attributes', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Toast id="1" message="Test" onClose={handleClose} />
      </TestWrapper>,
    );
    const toast = screen.getByRole('alert');
    expect(toast).toBeInTheDocument();
  });
});

