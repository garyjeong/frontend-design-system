import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const paginationVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof paginationVariants> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showFirstLast?: boolean;
    showPrevNext?: boolean;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
export default Pagination;
