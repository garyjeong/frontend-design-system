import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const dividerVariants = cva(
  "shrink-0 bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full my-4",
        vertical: "h-full w-[1px] mx-4 min-h-[1em]",
      },
      variant: {
        solid: "border-solid",
        dashed: "bg-transparent border-neutral-200 dark:border-neutral-700 border-dashed",
        dotted: "bg-transparent border-neutral-200 dark:border-neutral-700 border-dotted",
      },
    },
    compoundVariants: [
        {
            orientation: 'horizontal',
            variant: 'dashed',
            className: 'border-t',
        },
        {
            orientation: 'horizontal',
            variant: 'dotted',
            className: 'border-t-2',
        },
        {
            orientation: 'vertical',
            variant: 'dashed',
            className: 'border-l',
        },
        {
            orientation: 'vertical',
            variant: 'dotted',
            className: 'border-l-2',
        },
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "solid",
    },
  }
);

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation, variant, label, labelPosition = 'center', ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div className={cn("flex items-center w-full my-4", className)} ref={ref} {...props}>
          <div className={cn(
            "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
            variant === 'dashed' && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
            variant === 'dotted' && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
            labelPosition === 'left' && "flex-none w-8",
            labelPosition === 'right' && "flex-1"
          )} />
          <span className="px-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap">
            {label}
          </span>
          <div className={cn(
            "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
            variant === 'dashed' && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
            variant === 'dotted' && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
            labelPosition === 'right' && "flex-none w-8",
            labelPosition === 'left' && "flex-1"
          )} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(dividerVariants({ orientation, variant, className }))}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;


