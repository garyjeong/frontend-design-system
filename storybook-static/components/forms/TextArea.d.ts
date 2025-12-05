import { default as React, TextareaHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    required?: boolean;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
