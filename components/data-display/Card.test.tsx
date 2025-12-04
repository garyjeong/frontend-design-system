import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { Card } from './Card';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Card', () => {
  it('renders card with title', () => {
    render(
      <TestWrapper>
        <Card title="Card Title" />
      </TestWrapper>,
    );
    expect(screen.getByText(/card title/i)).toBeInTheDocument();
  });

  it('renders card with subtitle', () => {
    render(
      <TestWrapper>
        <Card title="Card Title" subtitle="Card Subtitle" />
      </TestWrapper>,
    );
    expect(screen.getByText(/card subtitle/i)).toBeInTheDocument();
  });

  it('renders card with content', () => {
    render(
      <TestWrapper>
        <Card>Card Content</Card>
      </TestWrapper>,
    );
    expect(screen.getByText(/card content/i)).toBeInTheDocument();
  });

  it('renders card with image', () => {
    render(
      <TestWrapper>
        <Card image="/test.jpg" imageAlt="Test image" />
      </TestWrapper>,
    );
    const image = screen.getByAltText(/test image/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
  });

  it('renders card with actions', () => {
    render(
      <TestWrapper>
        <Card actions={<button type="button">Action</button>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  it('applies default variant', () => {
    const { container } = render(
      <TestWrapper>
        <Card variant="default" />
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('applies outlined variant', () => {
    const { container } = render(
      <TestWrapper>
        <Card variant="outlined" />
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('applies elevated variant', () => {
    const { container } = render(
      <TestWrapper>
        <Card variant="elevated" />
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('applies hoverable prop', () => {
    const { container } = render(
      <TestWrapper>
        <Card hoverable />
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});

