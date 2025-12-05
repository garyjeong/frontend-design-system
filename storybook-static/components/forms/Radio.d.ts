import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
