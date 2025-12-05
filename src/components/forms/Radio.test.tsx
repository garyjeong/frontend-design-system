import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Radio } from './Radio';
import { vi } from 'vitest';

describe('Radio', () => {
  it('renders radio with label', () => {
    render(
        <Radio label="Option 1" />
    );
    expect(screen.getByLabelText(/option 1/i)).toBeInTheDocument();
  });

  it('handles checked state', () => {
    render(
      <Radio label="Checked" checked readOnly />
    );
    const radio = screen.getByLabelText(/checked/i);
    expect(radio).toBeChecked();
  });

  it('handles onChange event', () => {
    const handleChange = vi.fn();
    render(
        <Radio label="Test" onChange={handleChange} />
    );
    const radio = screen.getByLabelText(/test/i);
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not trigger onChange when already checked', () => {
    const handleChange = vi.fn();
    render(
        <Radio label="Test" checked onChange={handleChange} />
    );
    const radio = screen.getByLabelText(/test/i);
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
        <Radio label="Option" error="Please select" />
    );
    expect(screen.getByText(/please select/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
        <Radio label="Option" helperText="Select one" />
    );
    expect(screen.getByText(/select one/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
        <Radio label="Disabled" disabled />
    );
    const radio = screen.getByLabelText(/disabled/i);
    expect(radio).toBeDisabled();
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = vi.fn();
    render(
        <Radio label="Disabled" disabled onChange={handleChange} />
    );
    const radio = screen.getByLabelText(/disabled/i);
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
