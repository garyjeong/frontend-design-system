import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const textAreaVariants: (props?: ({
    variant?: "default" | "outlined" | "filled" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    error?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'error'> {
    label?: string;
    error?: string;
    helperText?: string;
    variant?: VariantProps<typeof textAreaVariants>['variant'];
    size?: VariantProps<typeof textAreaVariants>['size'];
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
