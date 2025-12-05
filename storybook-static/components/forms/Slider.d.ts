import { default as React, InputHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const sliderVariants: (props?: ({
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'min' | 'max' | 'onChange' | 'disabled'>, VariantProps<typeof sliderVariants> {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
}
export declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;
export default Slider;
