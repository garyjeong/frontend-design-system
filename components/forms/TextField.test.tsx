import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { TextField } from './TextField';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('TextField', () => {
  it('renders text field with label', () => {
    render(
      <TestWrapper>
        <TextField label="Username" />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it('renders text field with placeholder', () => {
    render(
      <TestWrapper>
        <TextField placeholder="Enter your name" />
      </TestWrapper>,
    );
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
  });

  it('handles value and onChange', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <TextField value="test" onChange={handleChange} />
      </TestWrapper>,
    );
    const input = screen.getByDisplayValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
      <TestWrapper>
        <TextField label="Email" error="Invalid email" />
      </TestWrapper>,
    );
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <TestWrapper>
        <TextField label="Password" helperText="Must be at least 8 characters" />
      </TestWrapper>,
    );
    expect(screen.getByText(/must be at least 8 characters/i)).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <TestWrapper>
        <TextField label="Email" required />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/required/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <TestWrapper>
        <TextField label="Disabled" disabled />
      </TestWrapper>,
    );
    const input = screen.getByLabelText(/disabled/i);
    expect(input).toBeDisabled();
  });

  it('supports keyboard navigation', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <TextField onChange={handleChange} />
      </TestWrapper>,
    );
    const input = screen.getByRole('textbox');
    input.focus();
    expect(input).toHaveFocus();
    fireEvent.keyDown(input, { key: 'a' });
    expect(input).toHaveFocus();
  });

  it('applies fullWidth prop', () => {
    const { container } = render(
      <TestWrapper>
        <TextField fullWidth />
      </TestWrapper>,
    );
    const fieldContainer = container.querySelector('div');
    expect(fieldContainer).toHaveStyle({ width: '100%' });
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <TextField label="Email" error="Error message" aria-label="Email input" />
      </TestWrapper>,
    );
    const input = screen.getByLabelText(/email input/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });
});
