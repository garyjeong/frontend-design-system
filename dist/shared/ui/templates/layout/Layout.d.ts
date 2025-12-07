import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const layoutVariants: (props?: {
    variant?: "default" | "sidebar" | "header-footer";
} & import('class-variance-authority/types').ClassProp) => string;
export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof layoutVariants> {
    header?: React.ReactNode;
    sidebar?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Layout: React.ForwardRefExoticComponent<LayoutProps & React.RefAttributes<HTMLDivElement>>;
export default Layout;
