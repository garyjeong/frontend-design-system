import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const textareaAutosizeVariants: (props?: {
    variant?: "default" | "filled" | "outlined";
    size?: "sm" | "md" | "lg";
    error?: boolean;
    minRows?: 1 | 2 | 3 | 4;
} & import('class-variance-authority/types').ClassProp) => string;
export interface TextareaAutosizeProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'error'> {
    label?: string;
    error?: string;
    helperText?: string;
    variant?: VariantProps<typeof textareaAutosizeVariants>['variant'];
    size?: VariantProps<typeof textareaAutosizeVariants>['size'];
    minRows?: VariantProps<typeof textareaAutosizeVariants>['minRows'];
    maxRows?: number;
}
export declare const TextareaAutosize: React.ForwardRefExoticComponent<TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextareaAutosize;
