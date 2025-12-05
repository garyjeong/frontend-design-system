import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface DropdownOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: DropdownOption[];
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    required?: boolean;
    placeholder?: string;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLSelectElement>>;
export default Dropdown;
