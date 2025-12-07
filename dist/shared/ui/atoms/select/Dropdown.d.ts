import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export declare const dropdownVariants: (props?: {
    variant?: "default" | "filled" | "outlined";
    size?: "sm" | "md" | "lg";
    error?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface DropdownProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    options: DropdownOption[];
    error?: string;
    helperText?: string;
    placeholder?: string;
    variant?: VariantProps<typeof dropdownVariants>['variant'];
    size?: VariantProps<typeof dropdownVariants>['size'];
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLSelectElement>>;
export default Dropdown;
