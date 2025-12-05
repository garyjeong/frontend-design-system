import { vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { List, type ListItem } from './List';
import '@testing-library/jest-dom';

// Mock the cn utility function for Vitest
vi.mock('@/utils/cn', () => ({
  cn: (...args: unknown[]) => args.filter(Boolean).join(' '),
}));

const mockItems: ListItem[] = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
];

describe('List', () => {
  it('renders list items', () => {
    render(<List items={mockItems} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders list with avatars', () => {
    const itemsWithAvatars = [{ id: '1', content: 'Item 1', avatar: <span>👤</span> }];
    render(<List items={itemsWithAvatars} />);
    expect(screen.getByText('👤')).toBeInTheDocument();
  });

  it('renders list with actions', () => {
    const itemsWithActions = [{ id: '1', content: 'Item 1', action: <button>Action</button> }];
    render(<List items={itemsWithActions} />);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('calls onItemClick when a clickable item is clicked', () => {
    const handleClick = vi.fn();
    render(<List items={mockItems} onItemClick={handleClick} />);
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);
    expect(handleClick).toHaveBeenCalledWith(mockItems[0]);
  });

  it('calls item-specific onClick when provided', () => {
    const itemClick = vi.fn();
    const itemsWithClick = [{ id: '1', content: 'Item 1', onClick: itemClick }];
    render(<List items={itemsWithClick} />);
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);
    expect(itemClick).toHaveBeenCalled();
  });

  it('does not call onClick for disabled items', () => {
    const handleClick = vi.fn();
    const itemClick = vi.fn();
    const itemsWithDisabled = [{ id: '1', content: 'Item 1', disabled: true, onClick: itemClick }];
    render(<List items={itemsWithDisabled} onItemClick={handleClick} />);
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);
    expect(handleClick).not.toHaveBeenCalled();
    expect(itemClick).not.toHaveBeenCalled();
  });

  it('applies correct attributes and classes for disabled items', () => {
    const itemsWithDisabled = [{ id: '1', content: 'Item 1', disabled: true }];
    render(<List items={itemsWithDisabled} />);
    const item1 = screen.getByRole('listitem');
    expect(item1).toHaveAttribute('aria-disabled', 'true');
    expect(item1).toHaveClass('opacity-60 cursor-not-allowed');
  });

  it('applies dense styling', () => {
    render(<List items={mockItems} dense />);
    const listItems = screen.getAllByRole('listitem');
    listItems.forEach(item => {
      expect(item).toHaveClass('py-2 px-4 text-sm');
    });
  });

  it('applies bordered variant styling', () => {
    render(<List items={mockItems} variant="bordered" />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('border');
  });

  it('applies divided variant styling', () => {
    render(<List items={mockItems} variant="divided" />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('divide-y');
  });

  it('applies maxHeight styling', () => {
    render(<List items={mockItems} maxHeight="300px" />);
    const list = screen.getByRole('list');
    expect(list).toHaveStyle('max-height: 300px');
    expect(list).toHaveStyle('overflow-y: auto');
  });
});

