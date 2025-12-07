import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const checkboxVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, VariantProps<typeof checkboxVariants> {
    label?: string;
    indeterminate?: boolean;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
