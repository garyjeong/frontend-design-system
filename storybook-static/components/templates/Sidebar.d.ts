import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export type SidebarNavItem = {
    label: string;
    href: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    badge?: number;
    children?: SidebarNavItem[];
};
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    isOpen?: boolean;
    onClose?: () => void;
    position?: 'left' | 'right';
    width?: string;
    collapsible?: boolean;
    children?: React.ReactNode;
    items?: SidebarNavItem[];
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onNavigate?: (href: string) => void;
}
export declare const Sidebar: ({ className, isOpen, onClose, position, width, collapsible, items, header, footer, onNavigate, children, ...props }: SidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
