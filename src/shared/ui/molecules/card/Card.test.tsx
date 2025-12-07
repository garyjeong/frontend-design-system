import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders card with title', () => {
    render(
        <Card title="Card Title" />
    );
    expect(screen.getByText(/card title/i)).toBeInTheDocument();
  });

  it('renders card with subtitle', () => {
    render(
        <Card title="Card Title" subtitle="Card Subtitle" />
    );
    expect(screen.getByText(/card subtitle/i)).toBeInTheDocument();
  });

  it('renders card with content', () => {
    render(
        <Card>Card Content</Card>
    );
    expect(screen.getByText(/card content/i)).toBeInTheDocument();
  });

  it('renders card with image', () => {
    render(
        <Card image="/test.jpg" imageAlt="Test image" />
    );
    const image = screen.getByAltText(/test image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
  });

  it('renders card with actions', () => {
    render(
        <Card actions={<button type="button">Action</button>} />
    );
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  it('applies default variant', () => {
    const { container } = render(
        <Card variant="default" />
    );
    expect(container.firstChild).toHaveClass('shadow-sm');
  });

  it('applies outlined variant', () => {
    const { container } = render(
        <Card variant="outlined" />
    );
    expect(container.firstChild).not.toHaveClass('shadow-sm');
    expect(container.firstChild).toHaveClass('border');
  });

  it('applies elevated variant', () => {
    const { container } = render(
        <Card variant="elevated" />
    );
    expect(container.firstChild).toHaveClass('shadow-md');
  });

  it('applies hoverable prop', () => {
    const { container } = render(
        <Card hoverable />
    );
    expect(container.firstChild).toHaveClass('hover:shadow-lg');
  });
});
