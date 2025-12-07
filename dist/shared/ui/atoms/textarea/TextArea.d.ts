import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const textAreaVariants: (props?: {
    variant?: "default" | "filled" | "outlined";
    size?: "sm" | "md" | "lg";
    error?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'error'> {
    label?: string;
    error?: string;
    helperText?: string;
    variant?: VariantProps<typeof textAreaVariants>['variant'];
    size?: VariantProps<typeof textAreaVariants>['size'];
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
