import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export interface TableColumn {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
}
declare const tableVariants: (props?: {
    variant?: "default" | "bordered" | "striped";
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
    columns: TableColumn[];
    data: Record<string, React.ReactNode>[];
    onRowClick?: (row: Record<string, React.ReactNode>) => void;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export default Table;
