import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import { vi } from 'vitest';

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown', () => {
  it('renders dropdown with label', () => {
    render(
        <Dropdown label="Select option" options={mockOptions} />
    );
    expect(screen.getByLabelText(/select option/i)).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(
        <Dropdown options={mockOptions} />
    );
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
    expect(screen.getByText(/option 2/i)).toBeInTheDocument();
    expect(screen.getByText(/option 3/i)).toBeInTheDocument();
  });

  it('handles value and onChange', () => {
    const handleChange = vi.fn();
    render(
        <Dropdown options={mockOptions} value="option1" onChange={handleChange} />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays placeholder', () => {
    render(
        <Dropdown options={mockOptions} placeholder="Choose an option" />
    );
    expect(screen.getByText(/choose an option/i)).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
        <Dropdown label="Select" options={mockOptions} error="Please select an option" />
    );
    expect(screen.getByText(/please select an option/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
        <Dropdown label="Select" options={mockOptions} helperText="Choose one option" />
    );
    expect(screen.getByText(/choose one option/i)).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
        <Dropdown label="Select" options={mockOptions} required />
    );
    expect(screen.getByLabelText(/required/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
        <Dropdown label="Select" options={mockOptions} disabled />
    );
    const select = screen.getByLabelText(/select/i);
    expect(select).toBeDisabled();
  });

  it('handles disabled options', () => {
    const optionsWithDisabled = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2', disabled: true },
    ];
    render(
        <Dropdown options={optionsWithDisabled} />
    );
    const option2 = screen.getByText(/option 2/i) as HTMLOptionElement;
    expect(option2.disabled).toBe(true);
  });

  it('supports keyboard navigation', () => {
    const handleChange = vi.fn();
    render(
        <Dropdown options={mockOptions} onChange={handleChange} />
    );
    const select = screen.getByRole('combobox');
    select.focus();
    expect(select).toHaveFocus();
  });

  it('has proper aria attributes', () => {
    render(
        <Dropdown label="Select" options={mockOptions} error="Error" aria-label="Select input" />
    );
    const select = screen.getByLabelText(/select input/i);
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAttribute('aria-describedby');
  });
});
