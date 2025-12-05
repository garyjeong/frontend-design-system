import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const radioVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, VariantProps<typeof radioVariants> {
    label?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
