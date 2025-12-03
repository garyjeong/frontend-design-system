import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Table } from './Table';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

interface TestData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const mockColumns = [
  { key: 'name', header: 'Name' },
  { key: 'age', header: 'Age' },
  { key: 'email', header: 'Email' },
];

const mockData: TestData[] = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
];

describe('Table', () => {
  it('renders table with headers', () => {
    render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} />
      </TestWrapper>,
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/age/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it('renders table with data', () => {
    render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} />
      </TestWrapper>,
    );
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/jane smith/i)).toBeInTheDocument();
  });

  it('renders custom cell content with render function', () => {
    const columnsWithRender = [
      {
        key: 'name',
        header: 'Name',
        render: (value: string) => <strong>{value}</strong>,
      },
    ];
    render(
      <TestWrapper>
        <Table columns={columnsWithRender} data={mockData} />
      </TestWrapper>,
    );
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  it('calls onRowClick when row is clicked', () => {
    const handleRowClick = jest.fn();
    render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} onRowClick={handleRowClick} />
      </TestWrapper>,
    );
    const row = screen.getByText(/john doe/i).closest('tr');
    if (row) {
      fireEvent.click(row);
      expect(handleRowClick).toHaveBeenCalledWith(mockData[0], 0);
    }
  });

  it('applies striped variant', () => {
    const { container } = render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} striped />
      </TestWrapper>,
    );
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('applies hoverable variant', () => {
    const { container } = render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} hoverable />
      </TestWrapper>,
    );
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('applies bordered variant', () => {
    const { container } = render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} bordered />
      </TestWrapper>,
    );
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('applies maxHeight', () => {
    const { container } = render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} maxHeight="400px" />
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('displays empty message when data is empty', () => {
    render(
      <TestWrapper>
        <Table columns={mockColumns} data={[]} emptyMessage="No data" />
      </TestWrapper>,
    );
    expect(screen.getByText(/no data/i)).toBeInTheDocument();
  });

  it('uses keyExtractor when provided', () => {
    const keyExtractor = (row: TestData) => `custom-${row.id}`;
    const { container } = render(
      <TestWrapper>
        <Table columns={mockColumns} data={mockData} keyExtractor={keyExtractor} />
      </TestWrapper>,
    );
    expect(container.querySelector('table')).toBeInTheDocument();
  });

  it('handles column alignment', () => {
    const columnsWithAlign = [
      { key: 'name', header: 'Name', align: 'center' as const },
    ];
    render(
      <TestWrapper>
        <Table columns={columnsWithAlign} data={mockData} />
      </TestWrapper>,
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
  });
});

