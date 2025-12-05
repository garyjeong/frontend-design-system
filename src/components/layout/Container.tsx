import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const containerVariants = cva(
  "mx-auto px-4 md:px-6 lg:px-8 w-full",
  {
    variants: {
      variant: {
        fluid: "max-w-full",
        fixed: "max-w-screen-xl", // Default fixed width
        narrow: "max-w-screen-md",
        wide: "max-w-screen-2xl",
      },
      centered: {
        true: "flex flex-col items-center",
        false: "",
      }
    },
    defaultVariants: {
      variant: "fixed",
      centered: false,
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, centered, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ variant, centered, className }))}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

export default Container;


