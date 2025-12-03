import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { ToastProvider, useToast } from './ToastProvider';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    <ToastProvider>
      {children}
    </ToastProvider>
  </StyledThemeProvider>
);

const TestComponent = () => {
  const { showToast } = useToast();
  return (
    <button type="button" onClick={() => showToast({ message: 'Test toast' })}>
      Show Toast
    </button>
  );
};

describe('ToastProvider', () => {
  it('renders toast when showToast is called', () => {
    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>,
    );
    const button = screen.getByText(/show toast/i);
    fireEvent.click(button);
    expect(screen.getByText(/test toast/i)).toBeInTheDocument();
  });

  it('removes toast when close button is clicked', () => {
    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>,
    );
    const button = screen.getByText(/show toast/i);
    fireEvent.click(button);
    const closeButton = screen.getByLabelText(/close toast/i);
    fireEvent.click(closeButton);
    expect(screen.queryByText(/test toast/i)).not.toBeInTheDocument();
  });

  it('shows multiple toasts', () => {
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
      <TestWrapper>
        <MultipleToastComponent />
      </TestWrapper>,
    );
    const button1 = screen.getByText(/show toast 1/i);
    const button2 = screen.getByText(/show toast 2/i);
    fireEvent.click(button1);
    fireEvent.click(button2);
    expect(screen.getByText(/toast 1/i)).toBeInTheDocument();
    expect(screen.getByText(/toast 2/i)).toBeInTheDocument();
  });

  it('throws error when useToast is used outside provider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    const TestComponentWithoutProvider = () => {
      useToast();
      return <div>Test</div>;
    };
    expect(() => {
      render(
        <StyledThemeProvider theme={lightTheme}>
          <TestComponentWithoutProvider />
        </StyledThemeProvider>,
      );
    }).toThrow('useToast must be used within a ToastProvider');
    consoleError.mockRestore();
  });
});

