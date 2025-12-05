import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    copyright?: string;
    links?: React.ReactNode;
    social?: React.ReactNode;
    variant?: 'default' | 'minimal';
}
export declare const Footer: ({ className, copyright, links, social, variant, children, ...props }: FooterProps) => import("react/jsx-runtime").JSX.Element;
export default Footer;
