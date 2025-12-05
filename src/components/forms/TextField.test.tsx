import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';
import { vi } from 'vitest';

describe('TextField', () => {
  it('renders text field with label', () => {
    render(
        <TextField label="Username" />
    );
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  });

  it('renders text field with placeholder', () => {
    render(
        <TextField placeholder="Enter your name" />
    );
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
  });

  it('handles value and onChange', () => {
    const handleChange = vi.fn();
    render(
        <TextField value="test" onChange={handleChange} />
    );
    const input = screen.getByDisplayValue('test');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
        <TextField label="Email" error="Invalid email" />
    );
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
        <TextField label="Password" helperText="Must be at least 8 characters" />
    );
    expect(screen.getByText(/must be at least 8 characters/i)).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
        <TextField label="Email" required />
    );
    expect(screen.getByLabelText(/required/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
        <TextField label="Disabled" disabled />
    );
    const input = screen.getByLabelText(/disabled/i);
    expect(input).toBeDisabled();
  });

  it('supports keyboard navigation', () => {
    const handleChange = vi.fn();
    render(
        <TextField onChange={handleChange} />
    );
    const input = screen.getByRole('textbox');
    input.focus();
    expect(input).toHaveFocus();
  });

  it('applies fullWidth prop', () => {
    const { container } = render(
        <TextField fullWidth />
    );
    const fieldContainer = container.querySelector('div');
    expect(fieldContainer).toHaveClass('w-full');
  });

  it('has proper aria attributes', () => {
    render(
        <TextField label="Email" error="Error message" aria-label="Email input" />
    );
    const input = screen.getByLabelText(/email input/i);
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby');
  });
});
