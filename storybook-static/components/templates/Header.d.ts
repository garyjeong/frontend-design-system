import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    sticky?: boolean;
    variant?: 'default' | 'transparent';
}
export declare const Header: ({ className, logo, navigation, actions, sticky, variant, children, ...props }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
