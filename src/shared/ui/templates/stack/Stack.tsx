import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const stackVariants = cva(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col",
        'row-reverse': "flex-row-reverse",
        'column-reverse': "flex-col-reverse",
      },
      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        '2xl': "gap-12",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      padding: {
        none: "p-0",
        xs: "p-1",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
        '2xl': "p-12",
      },
      margin: {
        none: "m-0",
        xs: "m-1",
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8",
        '2xl': "m-12",
      }
    },
    defaultVariants: {
      direction: "column",
      gap: "md",
      align: "stretch",
      justify: "start",
      wrap: false,
      fullWidth: false,
      padding: "none",
      margin: "none",
    },
  }
);

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  as?: React.ElementType;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, wrap, fullWidth, padding, margin, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(stackVariants({ direction, gap, align, justify, wrap, fullWidth, padding, margin, className }))}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack';

export default Stack;


