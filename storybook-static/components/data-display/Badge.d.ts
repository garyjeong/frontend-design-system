import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "destructive" | "success" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
export declare const Badge: ({ className, variant, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
