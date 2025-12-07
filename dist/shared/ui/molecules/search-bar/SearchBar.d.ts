import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const searchBarVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface SearchBarProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
    onSearch?: (value: string) => void;
    onClear?: () => void;
    clearable?: boolean;
    size?: VariantProps<typeof searchBarVariants>['size'];
    placeholder?: string;
}
export declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;
export default SearchBar;
