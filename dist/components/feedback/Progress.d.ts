import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const progressBarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    rounded?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const progressFillVariants: (props?: ({
    variant?: "primary" | "success" | "warning" | "error" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants> {
    value: number;
    max?: number;
    variant?: VariantProps<typeof progressFillVariants>['variant'];
    showLabel?: boolean;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export default Progress;
