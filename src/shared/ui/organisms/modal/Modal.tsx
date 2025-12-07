import React, { useEffect, useCallback, useState, useRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FaTimes } from 'react-icons/fa';
import { cn } from '@/shared/lib/utils/cn';
import { Portal } from '@/shared/lib/utils/portal';
import { useFocusTrap } from '@/shared/lib/hooks/useFocusTrap';
import { useFocusRestore } from '@/shared/lib/hooks/useFocusRestore';

const modalVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center p-4",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-lg",
        lg: "max-w-4xl",
        xl: "max-w-6xl",
        full: "max-w-[95vw]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const modalContentVariants = cva(
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-300",
);

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

interface ModalComposition {
  Header: typeof ModalHeader;
  Title: typeof ModalTitle;
  CloseButton: typeof ModalCloseButton;
  Description: typeof ModalDescription;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      size,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const titleId = useId();
    const descriptionId = useId();

    useFocusTrap({ enabled: open, containerRef: modalRef });
    useFocusRestore({ enabled: open });

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const handleClose = useCallback(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 300);
    }, [onClose]);

    useEffect(() => {
      if (open) {
        const handleEscape = (e: KeyboardEvent) => {
          if (closeOnEscape && e.key === 'Escape') {
            handleClose();
          }
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = '';
        };
      }
    }, [open, closeOnEscape, handleClose]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        handleClose();
      }
    };

    if (!isMounted) return null;
    if (!open && !isClosing) return null;

    return (
      <Portal>
        <div
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            isClosing ? "opacity-0" : "opacity-100",
          )}
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div
            ref={modalRef}
            className={cn(
              modalVariants({ size }),
              modalContentVariants(),
              isClosing ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
              className,
            )}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && typeof child.type !== 'string') {
                const componentType = child.type as React.ComponentType<{ id?: string; onClick?: () => void }>;
                if (componentType.displayName === 'ModalTitle') {
                  return React.cloneElement(child as React.ReactElement<{ id?: string }>, { id: titleId });
                }
                if (componentType.displayName === 'ModalDescription') {
                  return React.cloneElement(child as React.ReactElement<{ id?: string }>, { id: descriptionId });
                }
                if (componentType.displayName === 'ModalCloseButton') {
                  return React.cloneElement(child as React.ReactElement<{ onClick?: () => void }>, { onClick: handleClose });
                }
              }
              return child;
            })}
          </div>
        </div>
      </Portal>
    );
  },
) as React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>> & ModalComposition;

Modal.displayName = 'Modal';

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4",
          className,
        )}
        {...props}
      >
        {children}
      </header>
    );
  },
);

ModalHeader.displayName = 'ModalHeader';

interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn("text-xl font-semibold text-neutral-900 dark:text-white", className)}
        {...props}
      >
        {children}
      </h2>
    );
  },
);

ModalTitle.displayName = 'ModalTitle';

interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ModalCloseButton = React.forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label="Close modal"
        className={cn(
          "flex items-center justify-center p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
          className,
        )}
        {...props}
      >
        <FaTimes className="text-lg" />
      </button>
    );
  },
);

ModalCloseButton.displayName = 'ModalCloseButton';

interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const ModalDescription = React.forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);

ModalDescription.displayName = 'ModalDescription';

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn("flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300", className)}
        {...props}
      >
        {children}
      </main>
    );
  },
);

ModalContent.displayName = 'ModalContent';

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "flex items-center justify-stretch gap-2 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4",
          className,
        )}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as { className?: string };
            return React.cloneElement(child as React.ReactElement<any>, {
              className: cn("flex-1", childProps.className),
            });
          }
          return child;
        })}
      </footer>
    );
  },
);

ModalFooter.displayName = 'ModalFooter';

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Description = ModalDescription;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
