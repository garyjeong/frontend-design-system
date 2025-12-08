import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export interface ListItem {
    id: string;
    content: React.ReactNode;
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}
declare const listVariants: (props?: {
    variant?: "default" | "bordered" | "divided";
} & import('class-variance-authority/types').ClassProp) => string;
export interface ListProps extends React.HTMLAttributes<HTMLUListElement>, VariantProps<typeof listVariants> {
    items: ListItem[];
    dense?: boolean;
    maxHeight?: number | string;
    onItemClick?: (item: ListItem) => void;
}
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>;
export default List;
