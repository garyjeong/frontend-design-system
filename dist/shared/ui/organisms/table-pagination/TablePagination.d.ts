import { default as React } from 'react';
import { PaginationProps } from '../pagination';

export interface TablePaginationProps extends Omit<PaginationProps, 'totalPages'> {
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
export declare const TablePagination: React.ForwardRefExoticComponent<TablePaginationProps & React.RefAttributes<HTMLDivElement>>;
export default TablePagination;
