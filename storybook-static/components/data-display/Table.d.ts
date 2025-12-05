import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface TableColumn<T = any> {
    key: string;
    header: string;
    render?: (value: any, row: T, index: number) => React.ReactNode;
    width?: string;
    align?: 'left' | 'center' | 'right';
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
    className?: string;
}
export declare const Table: <T extends Record<string, any> = Record<string, any>>({ columns, data, keyExtractor, onRowClick, striped, hoverable, bordered, maxHeight, emptyMessage, className, }: TableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
