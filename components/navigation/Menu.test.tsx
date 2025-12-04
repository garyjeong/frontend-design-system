import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { Menu } from './Menu';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

const mockItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

describe('Menu', () => {
  it('renders menu items', () => {
    render(
      <TestWrapper>
        <Menu items={mockItems} />
      </TestWrapper>,
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('renders horizontal menu by default', () => {
    const { container } = render(
      <TestWrapper>
        <Menu items={mockItems} />
      </TestWrapper>,
    );
    const menu = container.querySelector('nav');
    expect(menu).toBeInTheDocument();
  });

  it('renders vertical menu when orientation is vertical', () => {
    const { container } = render(
      <TestWrapper>
        <Menu items={mockItems} orientation="vertical" />
      </TestWrapper>,
    );
    const menu = container.querySelector('nav');
    expect(menu).toBeInTheDocument();
  });

  it('highlights active item', () => {
    render(
      <TestWrapper>
        <Menu items={mockItems} activeItem="/about" />
      </TestWrapper>,
    );
    const aboutLink = screen.getByText(/about/i).closest('a');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
  });

  it('calls onItemClick when item is clicked', () => {
    const handleClick = jest.fn();
    render(
      <TestWrapper>
        <Menu items={mockItems} onItemClick={handleClick} />
      </TestWrapper>,
    );
    const homeLink = screen.getByText(/home/i).closest('a');
    if (homeLink) {
      fireEvent.click(homeLink);
      expect(handleClick).toHaveBeenCalledWith('/');
    }
  });

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { label: 'Home', href: '/' },
      { label: 'Disabled', href: '/disabled', disabled: true },
    ];
    render(
      <TestWrapper>
        <Menu items={itemsWithDisabled} />
      </TestWrapper>,
    );
    const disabledLink = screen.getByText(/disabled/i).closest('a');
    expect(disabledLink).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders menu with icons', () => {
    const itemsWithIcons = [
      { label: 'Home', href: '/', icon: <span>🏠</span> },
    ];
    render(
      <TestWrapper>
        <Menu items={itemsWithIcons} />
      </TestWrapper>,
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});

