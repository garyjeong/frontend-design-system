import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders avatar with image', () => {
    render(
        <Avatar src="/test.jpg" alt="Test Avatar" />
    );
    const image = screen.getByAltText(/test avatar/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
  });

  it('renders avatar with initials', () => {
    render(
        <Avatar initials="JD" />
    );
    expect(screen.getByText(/jd/i)).toBeInTheDocument();
  });

  it('generates initials from alt text', () => {
    render(
        <Avatar alt="John Doe" />
    );
    expect(screen.getByText(/jd/i)).toBeInTheDocument();
  });

  it('generates single initial from single word alt', () => {
    render(
        <Avatar alt="John" />
    );
    expect(screen.getByText(/j/i)).toBeInTheDocument();
  });

  it('shows fallback when image fails to load', async () => {
    render(
        <Avatar src="/invalid.jpg" alt="Test" fallback={<span>Fallback</span>} />
    );
    const image = screen.getByAltText(/test/i) as HTMLImageElement;
      fireEvent.error(image);
    await waitFor(() => {
      expect(screen.getByText(/fallback/i)).toBeInTheDocument();
    });
  });

  it('shows initials when image fails to load and no fallback', async () => {
    render(
        <Avatar src="/invalid.jpg" alt="John Doe" />
    );
    const image = screen.getByAltText(/john doe/i) as HTMLImageElement;
      fireEvent.error(image);
    await waitFor(() => {
      expect(screen.getByText(/jd/i)).toBeInTheDocument();
    });
  });

  it('applies small size', () => {
    const { container } = render(
        <Avatar size="small" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('w-8');
  });

  it('applies medium size', () => {
    const { container } = render(
        <Avatar size="medium" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('w-12');
  });

  it('applies large size', () => {
    const { container } = render(
        <Avatar size="large" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('w-16');
  });

  it('applies xlarge size', () => {
    const { container } = render(
        <Avatar size="xlarge" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('w-24');
  });

  it('applies circle shape', () => {
    const { container } = render(
        <Avatar shape="circle" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('applies square shape', () => {
    const { container } = render(
        <Avatar shape="square" initials="JD" />
    );
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('has proper aria attributes', () => {
    render(
        <Avatar alt="Test Avatar" initials="JD" />
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('aria-label', 'Test Avatar');
  });

  it('uses default aria-label when alt is not provided', () => {
    render(
        <Avatar initials="JD" />
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('aria-label', 'Avatar');
  });
});
