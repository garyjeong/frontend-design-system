import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const skeletonVariants: (props?: ({
    variant?: "circle" | "text" | "rectangle" | null | undefined;
    width?: "full" | "3/4" | "1/2" | "1/3" | "1/4" | null | undefined;
    height?: "auto" | "full" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
    children?: React.ReactNode;
}
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export default Skeleton;
