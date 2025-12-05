export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    hrefBuilder?: (page: number) => string;
    showFirstLast?: boolean;
    maxVisible?: number;
}
export declare const Pagination: ({ currentPage, totalPages, onPageChange, hrefBuilder, showFirstLast, maxVisible, }: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
export default Pagination;
