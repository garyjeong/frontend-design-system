import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const cardVariants = cva(
  "flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 dark:border-neutral-700 rounded-lg",
        outlined: "border border-neutral-200 dark:border-neutral-700 rounded-lg",
        elevated: "shadow-soft-lg border-none rounded-lg",
        flat: "bg-neutral-50 dark:bg-neutral-900 border-none rounded-lg",
        glass: "bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 rounded-lg",
        premium: "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-3xl border border-white/60 shadow-soft-xl ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900/40 dark:border-neutral-700/60 dark:ring-white/10 rounded-lg",
      },
      hoverable: {
        true: "hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer",
        false: "",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      hoverable: false,
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  headerAction?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({
    className,
    variant,
    hoverable,
    padding,
    title,
    headerAction,
    children,
    ...props
  }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(cardVariants({ variant, hoverable, padding }), className)} 
        {...props}
      >
        {(title || headerAction) && (
          <header className={cn(
            "flex items-start justify-between gap-4",
            padding === 'none' ? 'p-0' : padding === 'sm' ? 'px-4 pt-4' : padding === 'lg' ? 'px-8 pt-8' : 'px-6 pt-6',
            padding !== 'none' && "border-b border-neutral-200 dark:border-neutral-700"
          )}>
            {title && (
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {title}
              </h3>
            )}
            {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
          </header>
        )}
        
        <main className={cn(
          "flex-1",
          padding === 'none' ? 'p-0' : padding
        )}>
          {children}
        </main>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
