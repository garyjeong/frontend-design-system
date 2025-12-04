import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { Checkbox } from './Checkbox';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    render(
      <TestWrapper>
        <Checkbox label="Accept terms" />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/accept terms/i)).toBeInTheDocument();
  });

  it('handles checked state', () => {
    render(
      <TestWrapper>
        <Checkbox label="Checked" checked />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/checked/i);
    expect(checkbox).toBeChecked();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Checkbox label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/test/i);
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
      <TestWrapper>
        <Checkbox label="Accept" error="You must accept" />
      </TestWrapper>,
    );
    expect(screen.getByText(/you must accept/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <TestWrapper>
        <Checkbox label="Subscribe" helperText="Receive updates" />
      </TestWrapper>,
    );
    expect(screen.getByText(/receive updates/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <TestWrapper>
        <Checkbox label="Disabled" disabled />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/disabled/i);
    expect(checkbox).toBeDisabled();
  });

  it('supports keyboard navigation with Enter key', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Checkbox label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/test/i);
    checkbox.focus();
    fireEvent.keyDown(checkbox, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalled();
  });

  it('supports keyboard navigation with Space key', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Checkbox label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/test/i);
    checkbox.focus();
    fireEvent.keyDown(checkbox, { key: ' ' });
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Checkbox label="Disabled" disabled onChange={handleChange} />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/disabled/i);
    fireEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Checkbox label="Test" checked aria-label="Test checkbox" />
      </TestWrapper>,
    );
    const checkbox = screen.getByLabelText(/test checkbox/i);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
