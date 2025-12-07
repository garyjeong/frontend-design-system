import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

export declare const textFieldVariants: (props?: {
    variant?: "default" | "filled" | "outlined";
    size?: "sm" | "md" | "lg";
    error?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'error' | 'disabled' | 'readOnly' | 'required' | 'value' | 'defaultValue' | 'onChange'> {
    label?: string;
    error?: string;
    helperText?: string;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    variant?: VariantProps<typeof textFieldVariants>['variant'];
    size?: VariantProps<typeof textFieldVariants>['size'];
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
