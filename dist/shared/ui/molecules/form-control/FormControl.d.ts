import { default as React } from 'react';

interface FormControlContextValue {
    id: string;
    error?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
}
declare const useFormControl: () => FormControlContextValue;
export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
    error?: string;
    helperText?: string;
    required?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
}
export declare const FormControl: React.ForwardRefExoticComponent<FormControlProps & React.RefAttributes<HTMLDivElement>>;
export { useFormControl };
export default FormControl;
