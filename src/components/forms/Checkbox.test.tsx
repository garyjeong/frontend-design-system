import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { vi } from 'vitest';

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(
        <Checkbox label="Accept terms" />
    );
    expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
  });

  it('handles checked state', () => {
    render(
      <Checkbox label="Checked" checked readOnly />
    );
    const checkbox = screen.getByLabelText(/checked/i);
    expect(checkbox).toBeChecked();
  });

  it('handles onChange event', () => {
    const handleChange = vi.fn();
    render(
        <Checkbox label="Test" onChange={handleChange} />
    );
    const checkbox = screen.getByLabelText(/test/i);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
        <Checkbox label="Accept" error="You must accept" />
    );
    expect(screen.getByText(/you must accept/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
        <Checkbox label="Subscribe" helperText="Receive updates" />
    );
    expect(screen.getByText(/receive updates/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
        <Checkbox label="Disabled" disabled />
    );
    const checkbox = screen.getByLabelText(/disabled/i);
    expect(checkbox).toBeDisabled();
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = vi.fn();
    render(
        <Checkbox label="Disabled" disabled onChange={handleChange} />
    );
    const checkbox = screen.getByLabelText(/disabled/i);
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
