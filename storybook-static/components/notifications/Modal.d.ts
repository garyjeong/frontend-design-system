import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'full';
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
}
export declare const Modal: ({ isOpen, onClose, title, children, footer, size, closeOnOverlayClick, closeOnEscape, showCloseButton, }: ModalProps) => React.ReactPortal | null;
export default Modal;
