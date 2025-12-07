import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { TextFieldProps } from '../../atoms/input';

declare const formFieldVariants: (props?: {
    spacing?: "none" | "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface FormFieldProps extends Omit<TextFieldProps, 'label' | 'error' | 'helperText'> {
    label?: string;
    error?: string;
    helperText?: string;
    spacing?: VariantProps<typeof formFieldVariants>['spacing'];
}
export declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLInputElement>>;
export default FormField;
