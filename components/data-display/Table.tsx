'use client';

import React, { useMemo } from 'react';
import styled from 'styled-components';

export interface TableColumn<T = any> {
  key: string;
  header: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor?: (row: T, index: number) => string;
  onRowClick?: (row: T, index: number) => void;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  maxHeight?: string;
  emptyMessage?: string;
}

interface StyledTableProps {
  $striped?: boolean;
  $hoverable?: boolean;
  $bordered?: boolean;
  $maxHeight?: string;
}

const TableContainer = styled.div<StyledTableProps>`
  width: 100%;
  overflow-x: auto;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.paper};

  ${({ $bordered, theme }) => $bordered && `
    border: 1px solid ${theme.colors.border};
  `}

  ${({ $maxHeight }) => $maxHeight && `
    max-height: ${$maxHeight};
    overflow-y: auto;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const TableHeader = styled.th<{ $align?: string; $width?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ $align }) => $align || 'left'};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  white-space: nowrap;
  ${({ $width }) => $width && `width: ${$width};`}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const TableBody = styled.tbody<{ $striped?: boolean; $hoverable?: boolean }>`
  ${({ $striped, theme }) => $striped && `
    tr:nth-child(even) {
      background-color: ${theme.colors.background.default};
    }
  `}
`;

const TableRow = styled.tr<{ $clickable?: boolean; $hoverable?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.2s ease;

  ${({ $hoverable, theme, $clickable }) => ($hoverable || $clickable) && `
    &:hover {
      background-color: ${theme.colors.background.default};
      cursor: ${$clickable ? 'pointer' : 'default'};
    }
  `}

  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td<{ $align?: string }>`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ $align }) => $align || 'left'};
  color: ${({ theme }) => theme.colors.text.primary};
  vertical-align: middle;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const EmptyMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const Table = <T extends Record<string, any> = Record<string, any>>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  striped = false,
  hoverable = false,
  bordered = false,
  maxHeight,
  emptyMessage = 'No data available',
}: TableProps<T>) => {
  const getRowKey = useMemo(() => {
    if (keyExtractor) {
      return keyExtractor;
    }
    return (row: T, index: number) => {
      if (typeof row === 'object' && row !== null && 'id' in row) {
        return String(row.id);
      }
      return `row-${index}`;
    };
  }, [keyExtractor]);

  const handleRowClick = (row: T, index: number) => {
    if (onRowClick) {
      onRowClick(row, index);
    }
  };

  if (data.length === 0) {
    return (
      <TableContainer $bordered={bordered} $maxHeight={maxHeight}>
        <EmptyMessage>{emptyMessage}</EmptyMessage>
      </TableContainer>
    );
  }

  return (
    <TableContainer $bordered={bordered} $maxHeight={maxHeight}>
      <StyledTable role="table">
        <TableHead>
          <tr>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                $align={column.align}
                $width={column.width}
                scope="col"
              >
                {column.header}
              </TableHeader>
            ))}
          </tr>
        </TableHead>
        <TableBody $striped={striped} $hoverable={hoverable}>
          {data.map((row, rowIndex) => (
            <TableRow
              key={getRowKey(row, rowIndex)}
              $clickable={!!onRowClick}
              $hoverable={hoverable}
              onClick={() => handleRowClick(row, rowIndex)}
            >
              {columns.map((column) => {
                const value = row[column.key];
                const cellContent = column.render
                  ? column.render(value, row, rowIndex)
                  : value;

                return (
                  <TableCell key={column.key} $align={column.align}>
                    {cellContent}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;

