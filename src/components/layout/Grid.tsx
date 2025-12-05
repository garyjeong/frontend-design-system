import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const gridVariants = cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
        12: "grid-cols-12",
        none: "",
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
      cols: 1,
      gap: "md",
      align: "stretch",
      justify: "start",
      padding: "none",
      margin: "none",
    },
  }
);

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  as?: React.ElementType;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, align, justify, padding, margin, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(gridVariants({ cols, gap, align, justify, padding, margin, className }))}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

export default Grid;


