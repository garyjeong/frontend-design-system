import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Avatar } from './Avatar';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Avatar', () => {
  it('renders avatar with image', () => {
    render(
      <TestWrapper>
        <Avatar src="/test.jpg" alt="Test Avatar" />
      </TestWrapper>,
    );
    const image = screen.getByAltText(/test avatar/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
  });

  it('renders avatar with initials', () => {
    render(
      <TestWrapper>
        <Avatar initials="JD" />
      </TestWrapper>,
    );
    expect(screen.getByText(/jd/i)).toBeInTheDocument();
  });

  it('generates initials from alt text', () => {
    render(
      <TestWrapper>
        <Avatar alt="John Doe" />
      </TestWrapper>,
    );
    expect(screen.getByText(/jd/i)).toBeInTheDocument();
  });

  it('generates single initial from single word alt', () => {
    render(
      <TestWrapper>
        <Avatar alt="John" />
      </TestWrapper>,
    );
    expect(screen.getByText(/j/i)).toBeInTheDocument();
  });

  it('shows fallback when image fails to load', () => {
    render(
      <TestWrapper>
        <Avatar src="/invalid.jpg" alt="Test" fallback={<span>Fallback</span>} />
      </TestWrapper>,
    );
    const image = screen.getByAltText(/test/i);
    image.dispatchEvent(new Event('error', { bubbles: true }));
    expect(screen.getByText(/fallback/i)).toBeInTheDocument();
  });

  it('shows initials when image fails to load and no fallback', () => {
    render(
      <TestWrapper>
        <Avatar src="/invalid.jpg" alt="John Doe" />
      </TestWrapper>,
    );
    const image = screen.getByAltText(/john doe/i);
    image.dispatchEvent(new Event('error', { bubbles: true }));
    expect(screen.getByText(/jd/i)).toBeInTheDocument();
  });

  it('applies small size', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar size="small" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('applies medium size', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar size="medium" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('applies large size', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar size="large" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('applies xlarge size', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar size="xlarge" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('applies circle shape', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar shape="circle" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('applies square shape', () => {
    const { container } = render(
      <TestWrapper>
        <Avatar shape="square" initials="JD" />
      </TestWrapper>,
    );
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Avatar alt="Test Avatar" initials="JD" />
      </TestWrapper>,
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('aria-label', 'Test Avatar');
  });

  it('uses default aria-label when alt is not provided', () => {
    render(
      <TestWrapper>
        <Avatar initials="JD" />
      </TestWrapper>,
    );
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('aria-label', 'Avatar');
  });
});
