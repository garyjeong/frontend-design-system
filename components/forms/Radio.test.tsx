import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Radio } from './Radio';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Radio', () => {
  it('renders radio with label', () => {
    render(
      <TestWrapper>
        <Radio label="Option 1" />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/option 1/i)).toBeInTheDocument();
  });

  it('handles checked state', () => {
    render(
      <TestWrapper>
        <Radio label="Checked" checked />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('handles onChange event', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Radio label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not trigger onChange when already checked', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Radio label="Test" checked onChange={handleChange} />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
      <TestWrapper>
        <Radio label="Option" error="Please select" />
      </TestWrapper>,
    );
    expect(screen.getByText(/please select/i)).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(
      <TestWrapper>
        <Radio label="Option" helperText="Select one" />
      </TestWrapper>,
    );
    expect(screen.getByText(/select one/i)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(
      <TestWrapper>
        <Radio label="Disabled" disabled />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });

  it('supports keyboard navigation with Enter key', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Radio label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    radio.focus();
    fireEvent.keyDown(radio, { key: 'Enter' });
    expect(handleChange).toHaveBeenCalled();
  });

  it('supports keyboard navigation with Space key', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Radio label="Test" onChange={handleChange} />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    radio.focus();
    fireEvent.keyDown(radio, { key: ' ' });
    expect(handleChange).toHaveBeenCalled();
  });

  it('does not trigger onChange when disabled', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Radio label="Disabled" disabled onChange={handleChange} />
      </TestWrapper>,
    );
    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Radio label="Test" checked aria-label="Test radio" />
      </TestWrapper>,
    );
    const radio = screen.getByLabelText(/test radio/i);
    expect(radio).toHaveAttribute('aria-checked', 'true');
  });
});
