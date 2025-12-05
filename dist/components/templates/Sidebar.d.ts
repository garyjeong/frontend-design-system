import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export type SidebarNavItem = {
    label: string;
    href: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    badge?: number;
    children?: SidebarNavItem[];
};
declare const sidebarVariants: (props?: ({
    variant?: "default" | "collapsible" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SidebarProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sidebarVariants> {
    isOpen: boolean;
    onClose?: () => void;
    items: SidebarNavItem[];
    onNavigate?: (href: string) => void;
    header?: React.ReactNode;
    collapsible?: boolean;
}
export declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export default Sidebar;
