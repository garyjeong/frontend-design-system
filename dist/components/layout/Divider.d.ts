import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "solid" | "dashed" | "dotted" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    label?: string;
    labelPosition?: 'left' | 'center' | 'right';
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export default Divider;
