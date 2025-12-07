import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const alertVariants: (props?: {
    variant?: "error" | "success" | "warning" | "info";
} & import('class-variance-authority/types').ClassProp) => string;
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    title?: string;
    description: string;
    showIcon?: boolean;
    closable?: boolean;
    onClose?: () => void;
    action?: React.ReactNode;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export default Alert;
