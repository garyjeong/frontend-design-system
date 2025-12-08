import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export interface TableColumn {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
}

const tableVariants = cva(
  "w-full border-collapse",
  {
    variants: {
      variant: {
        default: "",
        striped: "[&>tbody>tr:nth-child(even)]:bg-neutral-50 dark:[&>tbody>tr:nth-child(even)]:bg-neutral-900/50",
        bordered: "border border-neutral-200 dark:border-neutral-700",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement>,
    VariantProps<typeof tableVariants> {
  columns: TableColumn[];
  data: Record<string, React.ReactNode>[];
  onRowClick?: (row: Record<string, React.ReactNode>) => void;
  emptyMessage?: string;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({
    columns,
    data,
    variant,
    size,
    onRowClick,
    emptyMessage = "No data available",
    className,
    ...props
  }, ref) => {
    const handleRowClick = (row: Record<string, React.ReactNode>) => {
      if (onRowClick) {
        onRowClick(row);
      }
    };

    return (
      <table
        ref={ref}
        className={cn(tableVariants({ variant, size }), className)}
        role="table"
        {...props}
      >
        <thead className="bg-neutral-50 dark:bg-neutral-900/50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  "p-4 font-semibold text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-200 dark:border-neutral-700 whitespace-nowrap",
                  size === 'sm' && "p-2",
                  size === 'lg' && "p-6",
                  column.align === 'center' && "text-center",
                  column.align === 'right' && "text-right",
                  !column.align && "text-left"
                )}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => handleRowClick(row)}
              className={cn(
                  "transition-colors transform",
                  onRowClick && "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/50 hover:shadow-md"
              )}
            >
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td
                    key={column.key}
                    className={cn(
                      "p-4 text-neutral-700 dark:text-neutral-300 align-middle",
                      size === 'sm' && "p-2",
                      size === 'lg' && "p-6",
                      column.align === 'center' && "text-center",
                      column.align === 'right' && "text-right",
                      !column.align && "text-left"
                    )}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-8 text-center text-neutral-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
);

Table.displayName = "Table";

export default Table;
