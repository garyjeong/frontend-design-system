import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const footerVariants: (props?: ({
    variant?: "default" | "minimal" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FooterProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof footerVariants> {
    links?: Array<{
        label: string;
        href: string;
    }>;
    copyright?: string;
}
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export default Footer;
