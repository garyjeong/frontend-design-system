import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const typographyVariants: (props?: ({
    variant?: "small" | "h3" | "p" | "caption" | "h1" | "h2" | "h4" | "h5" | "h6" | null | undefined;
    color?: "default" | "primary" | "secondary" | "white" | "success" | "warning" | "error" | "info" | "muted" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, VariantProps<typeof typographyVariants> {
    component?: React.ElementType;
}
export declare const Typography: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<HTMLElement>>;
export default Typography;
