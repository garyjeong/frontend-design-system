import React, { useState, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const tooltipVariants = cva(
  "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-neutral-800 rounded-lg shadow-soft-sm opacity-0 transition-opacity duration-200 pointer-events-none dark:bg-neutral-200 dark:text-neutral-900",
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
      placement: "top",
    },
  }
);

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  delay?: number;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, content, placement = 'top', delay = 300, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        setShowTooltip(true);
      }, delay);
    }, [delay]);

    const handleMouseLeave = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShowTooltip(false);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 200); // Allow time for transition
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative inline-block", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        {isVisible && (
          <div className={cn(tooltipVariants({ placement, visible: showTooltip }))}>
            {content}
            {/* Arrow */}
            <div
              className={cn(
                "absolute w-0 h-0 border-solid border-transparent",
                placement === 'top' && "top-full left-1/2 -translate-x-1/2 border-t-neutral-800 dark:border-t-neutral-200 border-8",
                placement === 'bottom' && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 dark:border-b-neutral-200 border-8",
                placement === 'left' && "left-full top-1/2 -translate-y-1/2 border-l-neutral-800 dark:border-l-neutral-200 border-8",
                placement === 'right' && "right-full top-1/2 -translate-y-1/2 border-r-neutral-800 dark:border-r-neutral-200 border-8"
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
