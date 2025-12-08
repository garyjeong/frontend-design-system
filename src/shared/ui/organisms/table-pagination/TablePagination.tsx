import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { Pagination, type PaginationProps } from '@/shared/ui/organisms/pagination';
import {
  FaAngleDoubleRight,
} from 'react-icons/fa';

const tablePaginationVariants = cva(
  "flex items-center justify-between px-4 py-3 border-t border-neutral-200 dark:border-neutral-700",
);

export interface TablePaginationProps
  extends Omit<PaginationProps, 'totalPages'> {
  /**
   * Total number of items
   */
  count: number;
  /**
   * Number of items per page
   */
  rowsPerPage: number;
  /**
   * Current page (0-indexed)
   */
  page: number;
  /**
   * Callback fired when the page is changed
   */
  onPageChange: (page: number) => void;
  /**
   * Callback fired when the number of rows per page is changed
   */
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  /**
   * Label for rows per page selector
   */
  rowsPerPageLabel?: string;
  /**
   * Options for rows per page selector
   */
  rowsPerPageOptions?: number[];
  /**
   * Label for pagination info
   */
  labelDisplayedRows?: (from: number, to: number, count: number) => string;
}

const defaultLabelDisplayedRows = (from: number, to: number, count: number): string => {
  return `${from}-${to} of ${count}`;
};

export const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      className,
      count,
      rowsPerPage,
      page,
      onPageChange,
      onRowsPerPageChange,
      rowsPerPageLabel = "Rows per page:",
      rowsPerPageOptions = [5, 10, 25, 50, 100],
      labelDisplayedRows = defaultLabelDisplayedRows,
      ...props
    },
    ref,
  ) => {
    const totalPages = Math.ceil(count / rowsPerPage);
    const from = page * rowsPerPage + 1;
    const to = Math.min((page + 1) * rowsPerPage, count);

    const handlePageChange = (newPage: number) => {
      onPageChange(newPage);
    };

    const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newRowsPerPage = parseInt(e.target.value, 10);
      onRowsPerPageChange?.(newRowsPerPage);
      onPageChange(0); // Reset to first page when rows per page changes
    };

    return (
      <div
        ref={ref}
        className={cn(tablePaginationVariants(), className)}
        {...props}
      >
        <div className="flex items-center gap-4">
          {onRowsPerPageChange && (
            <div className="flex items-center gap-2">
              <label className="text-sm text-neutral-700 dark:text-neutral-300">
                {rowsPerPageLabel}
              </label>
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPageChange}
                className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          <span className="text-sm text-neutral-700 dark:text-neutral-300">
            {labelDisplayedRows(from, to, count)}
          </span>
        </div>
        <Pagination
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={(newPage) => handlePageChange(newPage - 1)}
          showFirstLast
          showPrevNext
        />
      </div>
    );
  }
);

TablePagination.displayName = 'TablePagination';

export default TablePagination;

