import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const headerVariants: (props?: ({
    variant?: "default" | "fixed" | "sticky" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface HeaderProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof headerVariants> {
    logo?: React.ReactNode;
    nav?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export default Header;
