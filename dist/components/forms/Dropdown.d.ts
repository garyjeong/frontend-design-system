import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
declare const dropdownVariants: (props?: ({
    variant?: "default" | "outlined" | "filled" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    error?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
