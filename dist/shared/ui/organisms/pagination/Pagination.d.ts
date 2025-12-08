import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const paginationVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'maxVisible' | 'hrefBuilder'>, VariantProps<typeof paginationVariants> {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
    maxVisible?: number;
    hrefBuilder?: (page: number) => string;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
