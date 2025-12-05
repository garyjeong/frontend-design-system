import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const gridVariants: (props?: ({
    cols?: 1 | 2 | "none" | 3 | 4 | 5 | 6 | 12 | null | undefined;
    gap?: "none" | "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | null | undefined;
    align?: "stretch" | "center" | "end" | "start" | "baseline" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
    as?: React.ElementType;
}
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
export default Grid;
