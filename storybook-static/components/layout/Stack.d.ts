import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const stackVariants: (props?: ({
    direction?: "row" | "column" | "column-reverse" | "row-reverse" | null | undefined;
    gap?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | null | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly" | null | undefined;
    wrap?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
    as?: React.ElementType;
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export default Stack;
