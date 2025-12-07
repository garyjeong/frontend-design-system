import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const skeletonVariants = cva(
  "animate-pulse bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      variant: {
        text: "h-4",
        circle: "rounded-none",
        rectangle: "rounded-none",
      },
      width: {
        full: "w-full",
        '3/4': "w-3/4",
        '1/2': "w-1/2",
        '1/3': "w-1/3",
        '1/4': "w-1/4",
      },
      height: {
        auto: "h-auto",
        full: "h-full",
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
      },
    },
    defaultVariants: {
      variant: "rectangle",
      width: "full",
      height: "sm",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  children?: React.ReactNode; // To allow wrapping content
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, children, ...props }, ref) => {
    if (children) {
      return (
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-700" />
          <div className="opacity-0">
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, width, height, className }))}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
