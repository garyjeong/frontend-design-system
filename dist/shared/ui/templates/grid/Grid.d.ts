import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const gridVariants: (props?: {
    cols?: 1 | 2 | 3 | "none" | 4 | 5 | 12 | 6;
    gap?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
    align?: "center" | "baseline" | "start" | "end" | "stretch";
    justify?: "center" | "start" | "end" | "between" | "around";
    padding?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
    margin?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl";
} & import('class-variance-authority/types').ClassProp) => string;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
    as?: React.ElementType;
}
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export default Grid;
