import React, { useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { usePopover } from '@/shared/lib/hooks/usePopover';

const popoverVariants = cva(
  "absolute z-50 bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 min-w-[200px] max-w-sm opacity-0 transition-all duration-200",
  {
    variants: {
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
      },
      visible: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-95",
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

    const { triggerProps, triggerRef, popoverProps, popoverRef, isOpen } = usePopover({
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
        {React.cloneElement(children, { ...triggerProps, ref: triggerRef } as React.HTMLAttributes<HTMLElement>)}
        {isOpen && (
          <div 
            ref={popoverRef as React.Ref<HTMLDivElement>} 
            className={cn(
              popoverVariants({ placement, visible: isOpen }),
              className
            )}
            {...popoverProps}
          >
            {content}
            {arrow && (
              <>
                {/* Arrow shadow */}
                <div
                  className={cn(
                    "absolute w-0 h-0 border-solid border-transparent",
                    placement === 'top' && "top-full left-1/2 -translate-x-1/2 border-t-neutral-300 dark:border-t-neutral-600 border-[9px] mt-[-1px]",
                    placement === 'bottom' && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-300 dark:border-b-neutral-600 border-[9px] mb-[-1px]",
                    placement === 'left' && "left-full top-1/2 -translate-y-1/2 border-l-neutral-300 dark:border-l-neutral-600 border-[9px] ml-[-1px]",
                    placement === 'right' && "right-full top-1/2 -translate-y-1/2 border-r-neutral-300 dark:border-r-neutral-600 border-[9px] mr-[-1px]"
                  )}
                />
                {/* Arrow fill */}
                <div
                  className={cn(
                    "absolute w-0 h-0 border-solid border-transparent",
                    placement === 'top' && "top-full left-1/2 -translate-x-1/2 border-t-white dark:border-t-neutral-800 border-8 mt-[-2px]",
                    placement === 'bottom' && "bottom-full left-1/2 -translate-x-1/2 border-b-white dark:border-b-neutral-800 border-8 mb-[-2px]",
                    placement === 'left' && "left-full top-1/2 -translate-y-1/2 border-l-white dark:border-l-neutral-800 border-8 ml-[-2px]",
                    placement === 'right' && "right-full top-1/2 -translate-y-1/2 border-r-white dark:border-r-neutral-800 border-8 mr-[-2px]"
                  )}
                />
              </>
            )}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
