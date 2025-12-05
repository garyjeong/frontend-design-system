import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const gridVariants: (props?: ({
    cols?: 1 | 2 | "none" | 3 | 4 | 5 | 6 | 12 | null | undefined;
    gap?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
    align?: "center" | "baseline" | "start" | "end" | "stretch" | null | undefined;
    justify?: "center" | "start" | "end" | "between" | "around" | null | undefined;
    padding?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
    margin?: "xs" | "sm" | "md" | "lg" | "xl" | "none" | "2xl" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
    as?: React.ElementType;
}
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export default Grid;
