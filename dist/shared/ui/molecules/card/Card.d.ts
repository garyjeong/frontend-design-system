import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const cardVariants: (props?: {
    variant?: "default" | "outlined" | "flat" | "elevated" | "glass" | "premium";
    hoverable?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
} & import('class-variance-authority/types').ClassProp) => string;
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    interactive?: boolean;
    title?: string;
    headerAction?: React.ReactNode;
}
interface CardComposition {
    Header: typeof CardHeader;
    Title: typeof CardTitle;
    HeaderAction: typeof CardHeaderAction;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & CardComposition;
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: VariantProps<typeof cardVariants>['padding'];
}
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface CardHeaderActionProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const CardHeaderAction: React.ForwardRefExoticComponent<CardHeaderActionProps & React.RefAttributes<HTMLDivElement>>;
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: VariantProps<typeof cardVariants>['padding'];
}
declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: VariantProps<typeof cardVariants>['padding'];
}
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
