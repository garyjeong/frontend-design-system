import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { FaUser } from 'react-icons/fa';
import lightTheme from '../../styles/theme';
import { Button } from './Button';

// Test wrapper with ThemeProvider
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Button', () => {
  it('renders primary button with text', () => {
    render(
      <TestWrapper>
        <Button variant="primary">Click me</Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders secondary button', () => {
    render(
      <TestWrapper>
        <Button variant="secondary">Secondary</Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toBeInTheDocument();
  });

  it('renders icon button', () => {
    render(
      <TestWrapper>
        <Button variant="icon" icon={FaUser} aria-label="User icon" />
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /user icon/i });
    expect(button).toBeInTheDocument();
  });

  it('renders button with icon on left', () => {
    render(
      <TestWrapper>
        <Button variant="primary" icon={FaUser} iconPosition="left">
          User
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /user/i });
    expect(button).toBeInTheDocument();
  });

  it('renders button with icon on right', () => {
    render(
      <TestWrapper>
        <Button variant="primary" icon={FaUser} iconPosition="right">
          User
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /user/i });
    expect(button).toBeInTheDocument();
  });

  it('renders disabled button', () => {
    render(
      <TestWrapper>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('renders small size button', () => {
    render(
      <TestWrapper>
        <Button variant="primary" size="small">
          Small
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /small/i });
    expect(button).toBeInTheDocument();
  });

  it('renders large size button', () => {
    render(
      <TestWrapper>
        <Button variant="primary" size="large">
          Large
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /large/i });
    expect(button).toBeInTheDocument();
  });

  it('renders icon-only button with aria-label', () => {
    render(
      <TestWrapper>
        <Button variant="icon" icon={FaUser} aria-label="User button" />
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /user button/i });
    expect(button).toBeInTheDocument();
  });

  it('applies custom aria-label', () => {
    render(
      <TestWrapper>
        <Button variant="primary" aria-label="Custom label">
          Button
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /custom label/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(
      <TestWrapper>
        <Button variant="primary" onClick={handleClick}>
          Click me
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /click me/i });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not handle click events when disabled', () => {
    const handleClick = jest.fn();
    render(
      <TestWrapper>
        <Button variant="primary" disabled onClick={handleClick}>
          Disabled
        </Button>
      </TestWrapper>,
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    button.click();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
