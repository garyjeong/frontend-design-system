import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

export declare const menuVariants: (props?: {
    orientation?: "horizontal" | "vertical";
    variant?: "default" | "pills" | "tabs";
} & import('class-variance-authority/types').ClassProp) => string;
export declare const menuItemVariants: (props?: {
    active?: boolean;
    disabled?: boolean;
    variant?: "default" | "pills" | "tabs";
} & import('class-variance-authority/types').ClassProp) => string;
export interface MenuItem {
    id: string;
    label: string;
    icon?: IconType | React.ReactNode;
    href?: string;
    disabled?: boolean;
    onClick?: () => void;
    badge?: React.ReactNode;
}
export interface MenuProps extends VariantProps<typeof menuVariants> {
    items: MenuItem[];
    activeItem?: string;
    className?: string;
    onItemClick?: (item: MenuItem) => void;
}
export declare const Menu: ({ items, activeItem, orientation, variant, className, onItemClick }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export default Menu;
