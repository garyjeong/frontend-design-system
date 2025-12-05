import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const switchVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    checked?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'disabled'> {
    label?: string;
    labelPosition?: 'left' | 'right';
    size?: VariantProps<typeof switchVariants>['size'];
    checked?: boolean;
    disabled?: boolean;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
