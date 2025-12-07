import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const progressBarVariants: (props?: {
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
declare const progressFillVariants: (props?: {
    variant?: "error" | "success" | "warning" | "primary" | "info";
} & import('class-variance-authority/types').ClassProp) => string;
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressBarVariants> {
    value: number;
    max?: number;
    variant?: VariantProps<typeof progressFillVariants>['variant'];
    showLabel?: boolean;
}
export declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
export default Progress;
