import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const bannerVariants: (props?: ({
    variant?: "success" | "warning" | "error" | "info" | "neutral" | null | undefined;
    position?: "top" | "static" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    message: string;
    action?: React.ReactNode;
    onClose?: () => void;
}
export declare const Banner: React.ForwardRefExoticComponent<BannerProps & React.RefAttributes<HTMLDivElement>>;
export default Banner;
