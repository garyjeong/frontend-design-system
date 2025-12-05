import React, { useEffect, useCallback, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { cn } from '@/utils/cn';

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
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-300",
);

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof modalVariants> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({
    open,
    onClose,
    title,
    description,
    footer,
    size,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    className,
    children,
    ...props
  }, ref) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

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

    const content = (
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          isClosing ? "opacity-0" : "opacity-100"
        )}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        <div
          ref={ref}
          className={cn(
            modalVariants({ size }),
            modalContentVariants(),
            isClosing ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {(title || closeOnEscape) && (
            <header className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4">
              {title && (
                <h2 id="modal-title" className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {title}
                </h2>
              )}
              {closeOnEscape && (
                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="flex items-center justify-center rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white"
                >
                  <FaTimes className="text-lg" />
                </button>
              )}
            </header>
          )}
          {description && (
            <p id="modal-description" className="px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
          <main className="flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300">
            {children}
          </main>
          {footer && (
            <footer className="flex items-center justify-end gap-2 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4">
              {footer}
            </footer>
          )}
        </div>
      </div>
    );

    return createPortal(content, document.body);
  }
);

Modal.displayName = 'Modal';

export default Modal;
