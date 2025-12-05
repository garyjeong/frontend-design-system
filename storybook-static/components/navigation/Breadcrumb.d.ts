import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface BreadcrumbItem {
    label: string;
    href?: string;
    onClick?: () => void;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export default Breadcrumb;
