import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const skeletonVariants: (props?: {
    variant?: "text" | "circle" | "rectangle";
    width?: "full" | "3/4" | "1/2" | "1/3" | "1/4";
    height?: "auto" | "sm" | "md" | "lg" | "full";
} & import('class-variance-authority/types').ClassProp) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    children?: React.ReactNode;
}
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export default Skeleton;
