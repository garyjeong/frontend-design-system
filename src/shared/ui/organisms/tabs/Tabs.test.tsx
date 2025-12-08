import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Tabs, type TabItem } from './Tabs';
import '@testing-library/jest-dom';

const mockTabs: TabItem[] = [
  { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
  { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
  { label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
];

describe('Tabs', () => {
  it('renders tabs and shows first tab content by default', () => {
    render(<Tabs items={mockTabs} />);
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1');
  });

  it('shows content for defaultValue', () => {
    render(<Tabs items={mockTabs} defaultValue="tab2" />);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2');
    expect(screen.getByRole('tab', { name: 'Tab 2', selected: true })).toBeInTheDocument();
  });

  it('calls onValueChange and switches content when a tab is clicked in uncontrolled mode', () => {
    const handleChange = vi.fn();
    render(<Tabs items={mockTabs} onValueChange={handleChange} />);
    
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1');
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    
    fireEvent.click(tab2);

    expect(handleChange).toHaveBeenCalledWith('tab2');
    // In uncontrolled mode, the component should update its own state
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 2');
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });

  it('handles controlled value correctly', () => {
    const handleChange = vi.fn();
    const { rerender } = render(<Tabs items={mockTabs} value="tab1" onValueChange={handleChange} />);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1');

    // Clicking another tab should call onValueChange but not change content
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    expect(handleChange).toHaveBeenCalledWith('tab2');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 1'); // Content remains unchanged

    // Re-rendering with a new value from parent should change the content
    rerender(<Tabs items={mockTabs} value="tab3" onValueChange={handleChange} />);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Content 3');
  });

  it('handles disabled tabs', () => {
    const handleChange = vi.fn();
    const tabsWithDisabled: TabItem[] = [
      ...mockTabs,
      { label: 'Disabled', value: 'disabled', disabled: true, content: 'Disabled' },
    ];
    render(<Tabs items={tabsWithDisabled} onValueChange={handleChange} />);
    
    const disabledTab = screen.getByRole('tab', { name: 'Disabled' });
    expect(disabledTab).toBeDisabled();
    expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
    expect(disabledTab).toHaveClass('cursor-not-allowed', 'opacity-50');

    fireEvent.click(disabledTab);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('renders pills variant with correct active class', () => {
    render(<Tabs items={mockTabs} variant="pills" defaultValue="tab1" />);
    const activeTab = screen.getByRole('tab', { selected: true });
    expect(activeTab).toHaveClass('bg-primary-500', 'text-white');
  });

  it('supports fullWidth prop', () => {
    render(<Tabs items={mockTabs} fullWidth />);
    const tab = screen.getByRole('tab', { name: 'Tab 1' });
    expect(tab).toHaveClass('flex-1');
  });

  it('has proper aria attributes', () => {
    render(<Tabs items={mockTabs} defaultValue="tab2" />);
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    const tabpanel = screen.getByRole('tabpanel');

    expect(tab1).toHaveAttribute('aria-selected', 'false');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-controls', `tabpanel-tab2`);
    expect(tabpanel).toHaveAttribute('id', `tabpanel-tab2`);
    expect(tabpanel).toHaveAttribute('aria-labelledby', `tab-tab2`);
  });
});

