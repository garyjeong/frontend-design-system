import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';

export declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "outline" | "ghost" | "danger" | null | undefined;
    size?: "small" | "medium" | "large" | "icon" | null | undefined;
    fullWidth?: boolean | null | undefined;
    rounded?: "sm" | "default" | "none" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
