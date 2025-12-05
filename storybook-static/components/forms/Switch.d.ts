import { default as React, InputHTMLAttributes } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const switchVariants: (props?: ({
    checked?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled'>, VariantProps<typeof switchVariants> {
    label?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
