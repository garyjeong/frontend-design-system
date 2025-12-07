import React, { useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import { Portal } from '@/utils/portal';
import { usePopover } from '@/hooks/usePopover';

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
  children: React.ReactElement;
  content: React.ReactNode;
  arrow?: boolean;
  trigger?: 'click' | 'hover';
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, content, placement = 'bottom', arrow = true, className, trigger, open, defaultOpen, onOpenChange, ...props }, ref) => {
    const externalRef = useRef<HTMLDivElement>(null);

    const { triggerProps, popoverProps, isOpen } = usePopover({
      content,
      trigger,
      open,
      defaultOpen,
      onOpenChange,
      ...props,
    });

    // Merge the passed ref with the internal ref from usePopover
    React.useImperativeHandle(ref, () => externalRef.current!);

    return (
      <div
        ref={externalRef}
        className={cn("relative inline-block", className)}
      >
        {React.cloneElement(children, triggerProps)}
        {isOpen && (
          <Portal>
            <div className={cn(popoverVariants({ placement, visible: isOpen }), "p-4")} {...popoverProps}>
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
          </Portal>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
