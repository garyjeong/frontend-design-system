import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Table, type TableColumn } from './Table';
import '@testing-library/jest-dom';

const mockColumns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
];

const mockData = [
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

  it('calls onRowClick when row is clicked', () => {
    const handleRowClick = vi.fn();
    render(<Table columns={mockColumns} data={mockData} onRowClick={handleRowClick} />);
    const row = screen.getByText('John Doe').closest('tr');
    expect(row).toHaveClass('cursor-pointer');
    if (row) {
      fireEvent.click(row);
      expect(handleRowClick).toHaveBeenCalledWith(mockData[0]);
    }
  });

  it('applies striped styling variant', () => {
    const { container } = render(<Table columns={mockColumns} data={mockData} variant="striped" />);
    const table = container.querySelector('table');
    expect(table).toHaveClass('[&>tbody>tr:nth-child(even)]:bg-neutral-50');
  });

  it('applies bordered styling variant', () => {
    const { container } = render(<Table columns={mockColumns} data={mockData} variant="bordered" />);
    const table = container.querySelector('table');
    expect(table).toHaveClass('border');
  });

  it('displays empty message when data is empty', () => {
    render(<Table columns={mockColumns} data={[]} emptyMessage="No test data" />);
    expect(screen.getByText('No test data')).toBeInTheDocument();
  });

  it('handles column alignment', () => {
    const columnsWithAlign: TableColumn[] = [
      { key: 'name', label: 'Name', align: 'center' },
    ];
    render(<Table columns={columnsWithAlign} data={mockData} />);
    const header = screen.getByRole('columnheader', { name: 'Name' });
    const cell = screen.getAllByRole('cell')[0];
    expect(header).toHaveClass('text-center');
    expect(cell).toHaveClass('text-center');
  });
});

