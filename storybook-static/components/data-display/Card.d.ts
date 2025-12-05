import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

export declare const cardVariants: (props?: ({
    variant?: "default" | "flat" | "outlined" | "elevated" | null | undefined;
    hoverable?: boolean | null | undefined;
    padding?: "none" | "sm" | "md" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof cardVariants> {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    image?: string;
    imageAlt?: string;
    headerAction?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Card: ({ className, variant, hoverable, padding, title, subtitle, image, imageAlt, headerAction, footer, children, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
