import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Tabs } from './Tabs';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

const mockTabs = [
  { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
  { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
  { label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
];

describe('Tabs', () => {
  it('renders tabs', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} />
      </TestWrapper>,
    );
    expect(screen.getByText(/tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/tab 2/i)).toBeInTheDocument();
    expect(screen.getByText(/tab 3/i)).toBeInTheDocument();
  });

  it('shows first tab content by default', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} />
      </TestWrapper>,
    );
    expect(screen.getByText(/content 1/i)).toBeInTheDocument();
  });

  it('shows content for default value', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} defaultValue="tab2" />
      </TestWrapper>,
    );
    expect(screen.getByText(/content 2/i)).toBeInTheDocument();
  });

  it('calls onChange when tab is clicked', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Tabs items={mockTabs} onChange={handleChange} />
      </TestWrapper>,
    );
    const tab2 = screen.getByText(/tab 2/i);
    fireEvent.click(tab2);
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('switches content when tab is clicked', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} />
      </TestWrapper>,
    );
    const tab2 = screen.getByText(/tab 2/i);
    fireEvent.click(tab2);
    expect(screen.getByText(/content 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();
  });

  it('handles controlled value', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} value="tab3" />
      </TestWrapper>,
    );
    expect(screen.getByText(/content 3/i)).toBeInTheDocument();
  });

  it('handles disabled tabs', () => {
    const tabsWithDisabled = [
      { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
      { label: 'Disabled', value: 'disabled', disabled: true, content: <div>Disabled</div> },
    ];
    render(
      <TestWrapper>
        <Tabs items={tabsWithDisabled} />
      </TestWrapper>,
    );
    const disabledTab = screen.getByText(/disabled/i).closest('button');
    expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders pills variant', () => {
    const { container } = render(
      <TestWrapper>
        <Tabs items={mockTabs} variant="pills" />
      </TestWrapper>,
    );
    expect(container.querySelector('nav')).toBeInTheDocument();
  });

  it('supports fullWidth prop', () => {
    const { container } = render(
      <TestWrapper>
        <Tabs items={mockTabs} fullWidth />
      </TestWrapper>,
    );
    expect(container.querySelector('nav')).toBeInTheDocument();
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Tabs items={mockTabs} defaultValue="tab1" />
      </TestWrapper>,
    );
    const tab1 = screen.getByText(/tab 1/i).closest('button');
    expect(tab1).toHaveAttribute('role', 'tab');
    expect(tab1).toHaveAttribute('aria-selected', 'true');
  });
});

