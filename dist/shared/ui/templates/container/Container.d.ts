import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const containerVariants: (props?: {
    variant?: "fixed" | "fluid" | "narrow" | "wide";
    centered?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
    as?: React.ElementType;
}
export declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
export default Container;
