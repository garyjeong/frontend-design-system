import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

declare const textFieldVariants: (props?: ({
    variant?: "default" | "outlined" | "filled" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    error?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'error'> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    variant?: VariantProps<typeof textFieldVariants>['variant'];
    size?: VariantProps<typeof textFieldVariants>['size'];
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
