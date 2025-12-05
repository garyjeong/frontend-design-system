import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const modalVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>, VariantProps<typeof modalVariants> {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    footer?: React.ReactNode;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export default Modal;
