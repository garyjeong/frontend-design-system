import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export interface TableColumn {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
}
declare const tableVariants: (props?: ({
    variant?: "default" | "bordered" | "striped" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement>, VariantProps<typeof tableVariants> {
    columns: TableColumn[];
    data: Record<string, React.ReactNode>[];
    onRowClick?: (row: Record<string, React.ReactNode>) => void;
}
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLTableElement>>;
export default Table;
