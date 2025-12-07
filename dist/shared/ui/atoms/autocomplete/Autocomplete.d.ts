import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const autocompleteVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export declare const dropdownVariants: (props?: import('class-variance-authority/types').ClassProp) => string;
export declare const optionVariants: (props?: {
    selected?: boolean;
    highlighted?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface AutocompleteOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface AutocompleteProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'defaultValue' | 'type' | 'onSelect'> {
    options: AutocompleteOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    onSelect?: (option: AutocompleteOption) => void;
    filterFn?: (option: AutocompleteOption, inputValue: string) => boolean;
    size?: VariantProps<typeof autocompleteVariants>['size'];
    placeholder?: string;
    clearable?: boolean;
    label?: string;
    error?: string;
    helperText?: string;
}
export declare const Autocomplete: React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLInputElement>>;
export default Autocomplete;
