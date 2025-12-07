import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

export declare const buttonVariants: (props?: {
    variant?: "link" | "secondary" | "outline" | "primary" | "ghost" | "danger";
    size?: "icon" | "small" | "medium" | "large";
    fullWidth?: boolean;
    rounded?: "none" | "default" | "sm" | "full";
} & import('class-variance-authority/types').ClassProp) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
