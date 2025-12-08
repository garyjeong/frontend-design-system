import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';
import { vi } from 'vitest';

const mockItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

describe('Menu', () => {
  it('renders menu items', () => {
    render(
      <Menu items={mockItems} />
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('renders horizontal menu by default', () => {
    const { container } = render(
      <Menu items={mockItems} />
    );
    const menu = container.querySelector('nav');
    expect(menu).toHaveClass('flex-row');
  });

  it('renders vertical menu when orientation is vertical', () => {
    const { container } = render(
      <Menu items={mockItems} orientation="vertical" />
    );
    const menu = container.querySelector('nav');
    expect(menu).toHaveClass('flex-col');
  });

  it('highlights active item', () => {
    render(
      <Menu items={mockItems} activeItem="/about" />
    );
    const aboutLink = screen.getByText(/about/i).closest('a');
    expect(aboutLink).toHaveAttribute('aria-current', 'page');
    expect(aboutLink).toHaveClass('bg-primary-50');
  });

  it('calls onItemClick when item is clicked', () => {
    const handleClick = vi.fn();
    render(
      <Menu items={mockItems} onItemClick={handleClick} />
    );
    const homeLink = screen.getByText(/home/i).closest('a');
    if (homeLink) {
      fireEvent.click(homeLink);
      expect(handleClick).toHaveBeenCalledWith(mockItems[0]);
    }
  });

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'disabled', label: 'Disabled', href: '/disabled', disabled: true },
    ];
    render(
      <Menu items={itemsWithDisabled} />
    );
    const disabledLink = screen.getByText(/disabled/i).closest('a');
    expect(disabledLink).toHaveAttribute('aria-disabled', 'true');
    expect(disabledLink).toHaveClass('cursor-not-allowed');
  });

  it('renders menu with icons', () => {
    const itemsWithIcons = [
      { id: 'home', label: 'Home', href: '/', icon: <span>🏠</span> },
    ];
    render(
      <Menu items={itemsWithIcons} />
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
