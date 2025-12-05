import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

export declare const avatarVariants: (props?: ({
    size?: "small" | "medium" | "large" | "xlarge" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    initials?: string;
    fallback?: React.ReactNode;
}
export declare const Avatar: ({ className, size, shape, src, alt, initials, fallback, ...props }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
