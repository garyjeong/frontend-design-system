import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const modalVariants: (props?: {
    size?: "sm" | "md" | "lg" | "xl" | "full";
} & import('class-variance-authority/types').ClassProp) => string;
export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>, VariantProps<typeof modalVariants> {
    open: boolean;
    onClose: () => void;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
}
interface ModalComposition {
    Header: typeof ModalHeader;
    Title: typeof ModalTitle;
    CloseButton: typeof ModalCloseButton;
    Description: typeof ModalDescription;
    Content: typeof ModalContent;
    Footer: typeof ModalFooter;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>> & ModalComposition;
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare const ModalTitle: React.ForwardRefExoticComponent<ModalTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const ModalCloseButton: React.ForwardRefExoticComponent<ModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;
interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
}
declare const ModalDescription: React.ForwardRefExoticComponent<ModalDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
export default Modal;
