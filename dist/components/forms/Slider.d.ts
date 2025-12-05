import { default as React, InputHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const sliderVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
