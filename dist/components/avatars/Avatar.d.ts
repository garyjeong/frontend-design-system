import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "circle" | "square" | "rounded" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string | React.ReactNode;
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export default Avatar;
