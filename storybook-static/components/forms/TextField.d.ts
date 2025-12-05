import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { IconType } from 'react-icons';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'icon' | 'color'> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    required?: boolean;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
}
export declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
