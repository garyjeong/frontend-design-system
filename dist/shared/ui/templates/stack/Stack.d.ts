import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const stackVariants: (props?: {
    direction?: "row" | "column" | "column-reverse" | "row-reverse";
    gap?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
    align?: "center" | "baseline" | "start" | "end" | "stretch";
    justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
    wrap?: boolean;
    fullWidth?: boolean;
    padding?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
    margin?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
} & import('class-variance-authority/types').ClassProp) => string;
export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
    as?: React.ElementType;
}
export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export default Stack;
