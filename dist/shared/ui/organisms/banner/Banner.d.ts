import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const bannerVariants: (props?: {
    variant?: "error" | "success" | "warning" | "info" | "neutral";
    position?: "top" | "static";
} & import('class-variance-authority/types').ClassProp) => string;
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    message: string;
    action?: React.ReactNode;
    onClose?: () => void;
}
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
export default Banner;
