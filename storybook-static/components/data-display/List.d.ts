import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

export interface ListItem {
    id: string;
    content: React.ReactNode;
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
export interface ListProps extends React.HTMLAttributes<HTMLUListElement>, VariantProps<typeof listVariants> {
    items: ListItem[];
    dense?: boolean;
    maxHeight?: string;
    onItemClick?: (item: ListItem) => void;
}
declare const listVariants: (props?: ({
    variant?: "default" | "bordered" | "divided" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const List: ({ items, variant, dense, maxHeight, onItemClick, className, ...props }: ListProps) => import("react/jsx-runtime").JSX.Element;
export default List;
