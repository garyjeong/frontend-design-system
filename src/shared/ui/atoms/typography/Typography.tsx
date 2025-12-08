import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const typographyVariants = cva(
  "font-display text-neutral-900 dark:text-white",
  {
    variants: {
      variant: {
        h1: "text-4xl font-black leading-tight tracking-tight",
        h2: "text-2xl font-bold leading-tight tracking-tight",
        h3: "text-xl font-bold leading-tight",
        h4: "text-lg font-bold leading-normal",
        h5: "text-base font-bold leading-normal",
        h6: "text-sm font-bold leading-normal",
        p: "text-base font-normal leading-normal text-neutral-600 dark:text-neutral-300",
        caption: "text-sm font-medium text-neutral-500 dark:text-neutral-400",
        small: "text-xs font-medium text-neutral-500 dark:text-neutral-400"
      },
      color: {
        default: "text-neutral-900 dark:text-white",
        primary: "text-primary-700 dark:text-primary-400",
        secondary: "text-neutral-500 dark:text-neutral-400",
        success: "text-success-500 dark:text-success-400",
        error: "text-error-500 dark:text-error-400",
        warning: "text-warning-500 dark:text-warning-300",
        info: "text-info-500 dark:text-info-400",
        muted: "text-neutral-400 dark:text-neutral-500",
        white: "text-white",
      }
    },
    defaultVariants: {
      variant: "p",
      color: "default",
    },
  }
);

export interface TypographyProps 
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>, 
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, component, children, ...props }, ref) => {
    // Determine default component based on variant
    const Component = component ||
      (variant === 'p' || variant === 'caption' || variant === 'small' ? 'p' : variant) || 'span';

    return (
      <Component
        ref={ref as React.Ref<HTMLElement>}
        className={cn(typographyVariants({ variant, color: color as NonNullable<typeof color> }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;

