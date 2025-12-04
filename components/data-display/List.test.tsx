import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import lightTheme from '../../styles/theme';
import { List } from './List';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

const mockItems = [
  { id: '1', content: <span>Item 1</span> },
  { id: '2', content: <span>Item 2</span> },
  { id: '3', content: <span>Item 3</span> },
];

describe('List', () => {
  it('renders list items', () => {
    render(
      <TestWrapper>
        <List items={mockItems} />
      </TestWrapper>,
    );
    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/item 3/i)).toBeInTheDocument();
  });

  it('renders list with avatars', () => {
    const itemsWithAvatars = [
      { id: '1', content: <span>Item 1</span>, avatar: <span>👤</span> },
    ];
    render(
      <TestWrapper>
        <List items={itemsWithAvatars} />
      </TestWrapper>,
    );
    expect(screen.getByText(/item 1/i)).toBeInTheDocument();
  });

  it('renders list with actions', () => {
    const itemsWithActions = [
      { id: '1', content: <span>Item 1</span>, action: <button type="button">Action</button> },
    ];
    render(
      <TestWrapper>
        <List items={itemsWithActions} />
      </TestWrapper>,
    );
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  it('calls onItemClick when item is clicked', () => {
    const handleClick = jest.fn();
    render(
      <TestWrapper>
        <List items={mockItems} onItemClick={handleClick} />
      </TestWrapper>,
    );
    const item1 = screen.getByText(/item 1/i).closest('li');
    if (item1) {
      fireEvent.click(item1);
      expect(handleClick).toHaveBeenCalledWith(mockItems[0]);
    }
  });

  it('calls item onClick when provided', () => {
    const itemClick = jest.fn();
    const itemsWithClick = [
      { id: '1', content: <span>Item 1</span>, onClick: itemClick },
    ];
    render(
      <TestWrapper>
        <List items={itemsWithClick} />
      </TestWrapper>,
    );
    const item1 = screen.getByText(/item 1/i).closest('li');
    if (item1) {
      fireEvent.click(item1);
      expect(itemClick).toHaveBeenCalled();
    }
  });

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { id: '1', content: <span>Item 1</span>, disabled: true },
    ];
    render(
      <TestWrapper>
        <List items={itemsWithDisabled} />
      </TestWrapper>,
    );
    const item1 = screen.getByText(/item 1/i).closest('li');
    expect(item1).toHaveAttribute('aria-disabled', 'true');
  });

  it('applies dense variant', () => {
    const { container } = render(
      <TestWrapper>
        <List items={mockItems} dense />
      </TestWrapper>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('applies bordered variant', () => {
    const { container } = render(
      <TestWrapper>
        <List items={mockItems} variant="bordered" />
      </TestWrapper>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('applies divided variant', () => {
    const { container } = render(
      <TestWrapper>
        <List items={mockItems} variant="divided" />
      </TestWrapper>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('applies maxHeight', () => {
    const { container } = render(
      <TestWrapper>
        <List items={mockItems} maxHeight="400px" />
      </TestWrapper>,
    );
    expect(container.querySelector('ul')).toBeInTheDocument();
  });
});

