import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 border",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-500 text-white shadow hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        destructive: "border-transparent bg-error-500 text-white shadow hover:bg-error-600 dark:bg-error-500 dark:hover:bg-error-400",
        outline: "text-neutral-900 border-neutral-200 dark:text-neutral-50 dark:border-neutral-800",
        success: "border-transparent bg-success-500 text-white shadow hover:bg-success-600 dark:bg-success-500 dark:hover:bg-success-400",
        warning: "border-transparent bg-warning-500 text-white shadow hover:bg-warning-600 dark:bg-warning-500 dark:hover:bg-warning-400",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)} 
        {...props} 
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

