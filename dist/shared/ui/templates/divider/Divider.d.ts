import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const dividerVariants: (props?: {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
} & import('class-variance-authority/types').ClassProp) => string;
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    label?: string;
    labelPosition?: 'left' | 'center' | 'right';
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export default Divider;
