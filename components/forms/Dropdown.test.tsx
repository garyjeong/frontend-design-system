import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Dropdown } from './Dropdown';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Dropdown', () => {
  it('renders dropdown with label', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select option" options={mockOptions} />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/select option/i)).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(
      <TestWrapper>
        <Dropdown options={mockOptions} />
      </TestWrapper>,
    );
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
    expect(screen.getByText(/option 2/i)).toBeInTheDocument();
    expect(screen.getByText(/option 3/i)).toBeInTheDocument();
  });

  it('handles value and onChange', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Dropdown options={mockOptions} value="option1" onChange={handleChange} />
      </TestWrapper>,
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays placeholder', () => {
    render(
      <TestWrapper>
        <Dropdown options={mockOptions} placeholder="Choose an option" />
      </TestWrapper>,
    );
    expect(screen.getByText(/choose an option/i)).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select" options={mockOptions} error="Please select an option" />
      </TestWrapper>,
    );
    expect(screen.getByText(/please select an option/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select" options={mockOptions} helperText="Choose one option" />
      </TestWrapper>,
    );
    expect(screen.getByText(/choose one option/i)).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select" options={mockOptions} required />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/required/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select" options={mockOptions} disabled />
      </TestWrapper>,
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
      <TestWrapper>
        <Dropdown options={optionsWithDisabled} />
      </TestWrapper>,
    );
    const option2 = screen.getByText(/option 2/i) as HTMLOptionElement;
    expect(option2.disabled).toBe(true);
  });

  it('supports keyboard navigation', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Dropdown options={mockOptions} onChange={handleChange} />
      </TestWrapper>,
    );
    const select = screen.getByRole('combobox');
    select.focus();
    expect(select).toHaveFocus();
    fireEvent.keyDown(select, { key: 'ArrowDown' });
    expect(select).toHaveFocus();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Dropdown label="Select" options={mockOptions} error="Error" aria-label="Select input" />
      </TestWrapper>,
    );
    const select = screen.getByLabelText(/select input/i);
    expect(select).toHaveAttribute('aria-invalid', 'true');
    expect(select).toHaveAttribute('aria-describedby');
  });
});
