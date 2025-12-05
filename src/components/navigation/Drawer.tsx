import React, { useCallback, useEffect, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { FaTimes } from 'react-icons/fa';

const drawerVariants = cva(
  "fixed inset-0 z-50 transition-transform duration-300 ease-in-out bg-white dark:bg-neutral-900 shadow-xl",
  {
    variants: {
      open: {
        true: "translate-x-0 translate-y-0",
        false: "",
      },
      position: {
        left: "top-0 left-0 h-full w-80",
        right: "top-0 right-0 h-full w-80",
        top: "top-0 left-0 w-full h-80",
        bottom: "bottom-0 left-0 w-full h-80",
      },
    },
    compoundVariants: [
      { open: false, position: 'left', className: "-translate-x-full" },
      { open: false, position: 'right', className: "translate-x-full" },
      { open: false, position: 'top', className: "-translate-y-full" },
      { open: false, position: 'bottom', className: "translate-y-full" },
    ],
    defaultVariants: {
      position: "left",
      open: false,
    },
  }
);

const overlayVariants = cva(
  "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none",
      }
    },
    defaultVariants: {
      open: false,
    },
  }
);

export interface DrawerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, open, onClose, position = 'left', title, children, ...props }, forwardedRef) => {
    const drawerRef = useRef<HTMLDivElement>(null);

    // Expose drawerRef to the parent component if a ref is provided
    React.useImperativeHandle(forwardedRef, () => drawerRef.current!);

    const handleClose = useCallback(() => {
      onClose();
    }, [onClose]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      },
      [handleClose],
    );

    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleKeyDown);
      } else {
        document.removeEventListener('keydown', handleKeyDown);
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [open, handleKeyDown]);

    return (
      <>
        <div className={cn(overlayVariants({ open }))} onClick={handleClose} />
        <div
          ref={drawerRef}
          className={cn(
            drawerVariants({ open, position, className })
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'drawer-title' : undefined}
          {...props}
        >
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
            {title && <h3 id="drawer-title" className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>}
            <button
              onClick={handleClose}
              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close drawer"
            >
              <FaTimes className="text-neutral-500 dark:text-neutral-400 text-lg" />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </>
    );
  }
);

Drawer.displayName = 'Drawer';

export default Drawer;
