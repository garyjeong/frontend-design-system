import React, { useEffect, useCallback, useRef, useId, useMemo } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { FaTimes } from 'react-icons/fa';
import { cn } from '@/shared/lib/utils/cn';
import { Portal } from '@/shared/lib/utils/portal';
import { useFocusTrap } from '@/shared/lib/hooks/useFocusTrap';
import { useFocusRestore } from '@/shared/lib/hooks/useFocusRestore';

const modalVariants = cva("w-full", {
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
});

const modalContentVariants = cva(
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-200",
);

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof modalVariants> {
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

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      size,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const titleId = useId();
    const descriptionId = useId();

    const { hasTitle, hasDescription } = useMemo(() => {
      let hasTitle = false;
      let hasDescription = false;
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && typeof child.type !== 'string') {
          const componentType = child.type as React.ComponentType;
          if (componentType.displayName === 'ModalTitle') {
            hasTitle = true;
          }
          if (componentType.displayName === 'ModalDescription') {
            hasDescription = true;
          }
        }
      });
      return { hasTitle, hasDescription };
    }, [children]);

    useFocusTrap({ enabled: open, containerRef: modalRef });
    useFocusRestore({ enabled: open });

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
      if (!open) return;
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
    }, [open, closeOnEscape, handleClose]);

    if (!open) return null;

    return (
      <Portal>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (closeOnOverlayClick && e.target === e.currentTarget) handleClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={hasTitle ? titleId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
        >
          <div
            ref={(node) => {
              (modalRef as any).current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }}
            className={cn(modalVariants({ size }), modalContentVariants(), className)}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {showCloseButton && (
              <ModalCloseButton
                aria-label="Close modal"
                onClick={handleClose}
                className="absolute right-3 top-3"
              />
            )}
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
  ({ className, children, ...props }, ref) => (
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
  ),
);
ModalHeader.displayName = 'ModalHeader';

interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => (
      <h2
        ref={ref}
        className={cn("text-xl font-semibold text-neutral-900 dark:text-white", className)}
        {...props}
      >
        {children}
      </h2>
  ),
);
ModalTitle.displayName = 'ModalTitle';

interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const ModalCloseButton = React.forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  ({ className, ...props }, ref) => (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
          className,
        )}
        {...props}
      type="button"
      >
        <FaTimes className="text-lg" />
      </button>
  ),
);
ModalCloseButton.displayName = 'ModalCloseButton';

interface ModalDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
const ModalDescription = React.forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, children, ...props }, ref) => (
      <p
        ref={ref}
        className={cn("px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400", className)}
        {...props}
      >
        {children}
      </p>
  ),
);
ModalDescription.displayName = 'ModalDescription';

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}
const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => (
      <main
        ref={ref}
        className={cn("flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300", className)}
        {...props}
      >
        {children}
      </main>
  ),
);
ModalContent.displayName = 'ModalContent';

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => (
      <footer
        ref={ref}
        className={cn(
        "flex items-center justify-end gap-4 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4",
          className,
        )}
        {...props}
      >
      {children}
      </footer>
  ),
);
ModalFooter.displayName = 'ModalFooter';

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;
Modal.Description = ModalDescription;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
