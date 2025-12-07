import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const progressBarVariants = cva(
  "w-full bg-neutral-200 h-2 dark:bg-neutral-700 overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3",
      },
      rounded: {
        true: "rounded-none",
        false: "rounded-none",
      }
    },
    defaultVariants: {
      size: "md",
      rounded: false,
    },
  }
);

const progressFillVariants = cva(
  "h-full text-white flex items-center justify-center text-xs font-bold transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        success: "bg-success-500",
        warning: "bg-warning-500",
        error: "bg-error-500",
        info: "bg-info-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  max?: number;
  variant?: VariantProps<typeof progressFillVariants>['variant'];
  showLabel?: boolean;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, size, rounded, value, max = 100, variant = 'primary', showLabel = false, ...props }, ref) => {
    const percentage = Math.max(0, Math.min(100, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn(progressBarVariants({ size, rounded, className }))}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        {...props}
      >
        <div
          className={cn(progressFillVariants({ variant }))}
          style={{ width: `${percentage}%` }}
        >
          {showLabel && `${Math.round(percentage)}%`}
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
