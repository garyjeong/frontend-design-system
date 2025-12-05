import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const alertVariants: (props?: ({
    variant?: "success" | "warning" | "error" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
