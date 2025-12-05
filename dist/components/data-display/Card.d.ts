import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const cardVariants: (props?: ({
    variant?: "default" | "flat" | "outlined" | "elevated" | "glass" | "premium" | null | undefined;
    hoverable?: boolean | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    title?: string;
    headerAction?: React.ReactNode;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
