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
declare const listVariants: (props?: ({
    variant?: "default" | "bordered" | "divided" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ListProps extends React.HTMLAttributes<HTMLUListElement>, VariantProps<typeof listVariants> {
    items: ListItem[];
    onItemClick?: (item: ListItem) => void;
}
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLUListElement>>;
export default List;
