import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const avatarVariants: (props?: {
    size?: "sm" | "md" | "lg" | "xs" | "xl";
    variant?: "circle" | "square" | "rounded";
} & import('class-variance-authority/types').ClassProp) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string | React.ReactNode;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
