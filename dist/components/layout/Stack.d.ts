import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const stackVariants: (props?: ({
    direction?: "row" | "column" | "row-reverse" | "column-reverse" | null | undefined;
    gap?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
    align?: "center" | "baseline" | "start" | "end" | "stretch" | null | undefined;
    justify?: "center" | "start" | "end" | "between" | "around" | "evenly" | null | undefined;
    wrap?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
    padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
    margin?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
    as?: React.ElementType;
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export default Stack;
