import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FaUser } from 'react-icons/fa';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button', () => {
  it('renders primary button with text', () => {
    render(
        <Button variant="primary">Click me</Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders secondary button', () => {
    render(
        <Button variant="secondary">Secondary</Button>
    );
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toBeInTheDocument();
  });

  it('renders icon button', () => {
    render(
        <Button variant="icon" icon={FaUser} aria-label="User icon" />
    );
    const button = screen.getByRole('button', { name: /user icon/i });
    expect(button).toBeInTheDocument();
  });

  it('renders button with icon on left', () => {
    render(
        <Button variant="primary" icon={FaUser} iconPosition="left">
          User
        </Button>
    );
    const button = screen.getByRole('button', { name: /user/i });
    expect(button).toBeInTheDocument();
  });

  it('renders button with icon on right', () => {
    render(
        <Button variant="primary" icon={FaUser} iconPosition="right">
          User
        </Button>
    );
    const button = screen.getByRole('button', { name: /user/i });
    expect(button).toBeInTheDocument();
  });

  it('renders disabled button', () => {
    render(
        <Button variant="primary" disabled>
          Disabled
        </Button>
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('renders small size button', () => {
    render(
        <Button variant="primary" size="small">
          Small
        </Button>
    );
    const button = screen.getByRole('button', { name: /small/i });
    expect(button).toBeInTheDocument();
  });

  it('renders large size button', () => {
    render(
        <Button variant="primary" size="large">
          Large
        </Button>
    );
    const button = screen.getByRole('button', { name: /large/i });
    expect(button).toBeInTheDocument();
  });

  it('renders icon-only button with aria-label', () => {
    render(
        <Button variant="icon" icon={FaUser} aria-label="User button" />
    );
    const button = screen.getByRole('button', { name: /user button/i });
    expect(button).toBeInTheDocument();
  });

  it('applies custom aria-label', () => {
    render(
        <Button variant="primary" aria-label="Custom label">
          Button
        </Button>
    );
    const button = screen.getByRole('button', { name: /custom label/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(
        <Button variant="primary" onClick={handleClick}>
          Click me
        </Button>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not handle click events when disabled', () => {
    const handleClick = vi.fn();
    render(
        <Button variant="primary" disabled onClick={handleClick}>
          Disabled
        </Button>
    );
    const button = screen.getByRole('button', { name: /disabled/i });
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

