import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const badgeVariants: (props?: {
    variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
    size?: "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export default Badge;
