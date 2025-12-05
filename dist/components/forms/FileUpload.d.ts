import { default as React, InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const fileUploadVariants: (props?: ({
    variant?: "default" | "drag" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'>, VariantProps<typeof fileUploadVariants> {
    label?: string;
    helperText?: string;
    error?: string;
    multiple?: boolean;
    accept?: string;
    onFileChange?: (files: File[]) => void;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
export default FileUpload;
