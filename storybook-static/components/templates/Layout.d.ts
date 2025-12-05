import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    sidebar?: React.ReactNode;
    sidebarPosition?: 'left' | 'right';
    children?: React.ReactNode;
    fullHeight?: boolean;
}
export declare const Layout: ({ className, header, footer, sidebar, sidebarPosition, children, fullHeight, ...props }: LayoutProps) => import("react/jsx-runtime").JSX.Element;
export default Layout;
