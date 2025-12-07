import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const numberInputVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange'> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    precision?: number;
    size?: VariantProps<typeof numberInputVariants>['size'];
    label?: string;
    error?: string;
    helperText?: string;
    onChange?: (value: number) => void;
    showControls?: boolean;
}
export declare const NumberInput: React.ForwardRefExoticComponent<NumberInputProps & React.RefAttributes<HTMLInputElement>>;
export default NumberInput;
