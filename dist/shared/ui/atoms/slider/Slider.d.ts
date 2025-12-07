import { default as React, InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const sliderVariants: (props?: {
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export declare const trackVariants: (props?: {
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export declare const rangeVariants: (props?: import('class-variance-authority/types').ClassProp) => string;
export declare const thumbVariants: (props?: {
    size?: "sm" | "md" | "lg";
    focused?: boolean;
    active?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'min' | 'max' | 'onChange' | 'disabled' | 'size'>, VariantProps<typeof sliderVariants> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
export default Slider;
