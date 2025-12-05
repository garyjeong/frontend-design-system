import { default as React, InputHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    helperText?: string;
    error?: string;
    multiple?: boolean;
    accept?: string;
    onFileChange?: (files: File[]) => void;
}
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLInputElement>>;
export default FileUpload;
