import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const switchVariants: (props?: {
    size?: "sm" | "md" | "lg";
    checked?: boolean;
    disabled?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export declare const switchThumbVariants: (props?: {
    size?: "sm" | "md" | "lg";
    checked?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'disabled'> {
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: VariantProps<typeof switchVariants>['size'];
    checked?: boolean;
    disabled?: boolean;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
