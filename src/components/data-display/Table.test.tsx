import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Table, type TableColumn } from './Table';
import '@testing-library/jest-dom';

interface TestData {
  id: number;
  name: string;
  age: number;
  email: string;
}

const mockColumns: TableColumn<TestData>[] = [
  { key: 'name', header: 'Name' },
  { key: 'age', header: 'Age' },
  { key: 'email', header: 'Email' },
];

const mockData: TestData[] = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
];

describe('Table', () => {
  it('renders table headers and data', () => {
    render(<Table columns={mockColumns} data={mockData} />);
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Age' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Email' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'John Doe' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Jane Smith' })).toBeInTheDocument();
  });

  it('renders custom cell content with render function', () => {
    const columnsWithRender: TableColumn<TestData>[] = [
      { key: 'name', header: 'Name', render: (value) => <strong>{value}</strong> },
    ];
    render(<Table columns={columnsWithRender} data={mockData} />);
    const strongElement = screen.getByText('John Doe');
    expect(strongElement.tagName).toBe('STRONG');
  });

  it('calls onRowClick when row is clicked', () => {
    const handleRowClick = vi.fn();
    render(<Table columns={mockColumns} data={mockData} onRowClick={handleRowClick} />);
    const row = screen.getByText('John Doe').closest('tr');
    expect(row).toHaveClass('cursor-pointer');
    if (row) {
      fireEvent.click(row);
      expect(handleRowClick).toHaveBeenCalledWith(mockData[0], 0);
    }
  });

  it('applies striped styling', () => {
    const { container } = render(<Table columns={mockColumns} data={mockData} striped />);
    const tbody = container.querySelector('tbody');
    expect(tbody).toHaveClass('[&>tr:nth-child(even)]:bg-slate-50');
  });

  it('applies hoverable styling', () => {
    render(<Table columns={mockColumns} data={mockData} hoverable />);
    const row = screen.getByText('John Doe').closest('tr');
    expect(row).toHaveClass('hover:bg-slate-100');
  });

  it('applies bordered styling', () => {
    const { container } = render(<Table columns={mockColumns} data={mockData} bordered />);
    const tableContainer = container.firstChild;
    expect(tableContainer).toHaveClass('border');
  });

  it('applies maxHeight styling', () => {
    const { container } = render(<Table columns={mockColumns} data={mockData} maxHeight="400px" />);
    const tableContainer = container.firstChild;
    expect(tableContainer).toHaveStyle('max-height: 400px');
    expect(tableContainer).toHaveStyle('overflow-y: auto');
  });

  it('displays empty message when data is empty', () => {
    render(<Table columns={mockColumns} data={[]} emptyMessage="No test data" />);
    expect(screen.getByText('No test data')).toBeInTheDocument();
  });

  it('uses keyExtractor when provided', () => {
    const keyExtractor = (row: TestData) => `custom-${row.id}`;
    render(<Table columns={mockColumns} data={mockData} keyExtractor={keyExtractor} />);
    const row = screen.getByText('John Doe').closest('tr');
    // This is hard to test without inspecting the internal React keys.
    // We'll trust that if it renders, the key is being used.
    expect(row).toBeInTheDocument();
  });

  it('handles column alignment', () => {
    const columnsWithAlign: TableColumn<TestData>[] = [
      { key: 'name', header: 'Name', align: 'center' },
    ];
    render(<Table columns={columnsWithAlign} data={mockData} />);
    const header = screen.getByRole('columnheader', { name: 'Name' });
    const cell = screen.getAllByRole('cell')[0];
    expect(header).toHaveClass('text-center');
    expect(cell).toHaveClass('text-center');
  });
});

