import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const typographyVariants: (props?: {
    variant?: "small" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    color?: "error" | "default" | "secondary" | "success" | "warning" | "primary" | "white" | "info" | "muted";
} & import('class-variance-authority/types').ClassProp) => string;
export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof typographyVariants> {
    component?: React.ElementType;
}
export declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
export default Typography;
