import React, { useState, useCallback, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const popoverVariants = cva(
  "absolute z-50 bg-white rounded-lg shadow-soft-lg border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 opacity-0 transition-opacity duration-200",
  {
    variants: {
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0",
      }
    },
    defaultVariants: {
      placement: "bottom",
    },
  }
);

export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof popoverVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: 'click' | 'hover';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  arrow?: boolean;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, content, placement = 'bottom', trigger = 'click', open: controlledOpen, onOpenChange, arrow = true, className, ...props }, ref) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isControlled = typeof controlledOpen === 'boolean';
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const triggerRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
      if (isControlled) {
        onOpenChange?.(!isOpen);
      } else {
        setUncontrolledOpen(!isOpen);
      }
    }, [isOpen, isControlled, onOpenChange]);

    const handleInteraction = useCallback(() => {
      if (trigger === 'click') {
        toggleOpen();
      }
    }, [trigger, toggleOpen]);

    const handleHoverEnter = useCallback(() => {
      if (trigger === 'hover') {
        if (isControlled) {
          onOpenChange?.(true);
        } else {
          setUncontrolledOpen(true);
        }
      }
    }, [trigger, isControlled, onOpenChange]);

    const handleHoverLeave = useCallback(() => {
      if (trigger === 'hover') {
        if (isControlled) {
          onOpenChange?.(false);
        } else {
          setUncontrolledOpen(false);
        }
      }
    }, [trigger, isControlled, onOpenChange]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          isOpen &&
          triggerRef.current &&
          !triggerRef.current.contains(event.target as Node) &&
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node)
        ) {
          if (isControlled) {
            onOpenChange?.(false);
          } else {
            setUncontrolledOpen(false);
          }
        }
      };

      if (isOpen && trigger === 'click') {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, isControlled, onOpenChange, trigger]);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        {...props}
      >
        <div ref={triggerRef} onClick={handleInteraction}>
          {children}
        </div>
        {isOpen && (
          <div ref={popoverRef} className={cn(popoverVariants({ placement, visible: isOpen }), "p-4")}>
            {content}
            {arrow && (
              <div
                className={cn(
                  "absolute w-0 h-0 border-solid border-transparent",
                  placement === 'top' && "top-full left-1/2 -translate-x-1/2 border-t-neutral-200 dark:border-t-neutral-700 border-8 mt-[-1px]",
                  placement === 'bottom' && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-200 dark:border-b-neutral-700 border-8 mb-[-1px]",
                  placement === 'left' && "left-full top-1/2 -translate-y-1/2 border-l-neutral-200 dark:border-l-neutral-700 border-8 ml-[-1px]",
                  placement === 'right' && "right-full top-1/2 -translate-y-1/2 border-r-neutral-200 dark:border-r-neutral-700 border-8 mr-[-1px]"
                )}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
