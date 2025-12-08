import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const cardVariants = cva(
  "flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-sm border border-neutral-200 dark:border-neutral-700",
        outlined: "border border-neutral-200 dark:border-neutral-700",
        elevated: "shadow-md border-none",
        flat: "bg-neutral-50 dark:bg-neutral-900 border-none",
        glass:
          "bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5",
        premium:
          "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-3xl border border-white/60 shadow-soft-xl ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900/40 dark:border-neutral-700/60 dark:ring-white/10",
      },
      hoverable: {
        true: "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
        false: "",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverable: false,
      padding: "md",
    },
  }
);

const cardContentVariants = cva("", {
  variants: {
    padding: {
      none: "p-0",
      sm: "px-4 pt-4 pb-4",
      md: "px-6 pt-6 pb-6",
      lg: "px-8 pt-8 pb-8",
    },
  },
  defaultVariants: {
    padding: "md",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  interactive?: boolean;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  hoverable?: boolean;
  headerAction?: React.ReactNode;
}

interface CardComposition {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  HeaderAction: typeof CardHeaderAction;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = 'default',
      padding = 'md',
      title,
      subtitle,
      image,
      imageAlt,
      actions,
      hoverable = false,
      headerAction,
      children,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            hoverable,
            padding,
          }),
          className,
        )}
      >
        {image && (
          <img
            src={image}
            alt={imageAlt || title || 'card image'}
            className={cn(padding === 'none' ? '' : 'w-full h-auto object-cover', padding !== 'none' && 'rounded-t-xl')}
          />
        )}
        {(title || subtitle || headerAction) && (
          <CardHeader padding={padding}>
            <div className="flex flex-col">
              {title && <CardTitle>{title}</CardTitle>}
              {subtitle && <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>}
            </div>
            {headerAction && <CardHeaderAction>{headerAction}</CardHeaderAction>}
          </CardHeader>
        )}
        <div className={cn(cardContentVariants({ padding }))}>{children}</div>
        {actions && <CardFooter padding={padding}>{actions}</CardFooter>}
      </div>
    );
  },
) as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & CardComposition;

Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: VariantProps<typeof cardVariants>['padding'];
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, children, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "flex items-center justify-between gap-4",
          padding === 'none'
            ? 'p-0'
            : padding === 'sm'
              ? 'px-4 pt-4 pb-0'
              : padding === 'lg'
                ? 'px-8 pt-8 pb-0'
                : 'px-6 pt-6 pb-0',
          padding !== 'none' && "border-b border-neutral-200 dark:border-neutral-700 mb-0",
          className,
        )}
        {...props}
      >
        {children}
      </header>
    );
  },
);

CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn("text-lg font-bold text-neutral-900 dark:text-white", className)}
        {...props}
      >
        {children}
      </h3>
    );
  },
);

CardTitle.displayName = "CardTitle";

interface CardHeaderActionProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeaderAction = React.forwardRef<HTMLDivElement, CardHeaderActionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex-shrink-0", className)} {...props}>
        {children}
      </div>
    );
  },
);

CardHeaderAction.displayName = "CardHeaderAction";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: VariantProps<typeof cardVariants>['padding'];
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, padding, children, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "flex-1",
          padding === 'none'
            ? 'p-0'
            : padding === 'sm'
              ? 'px-4 pt-4 pb-4'
              : padding === 'lg'
                ? 'px-8 pt-8 pb-8'
                : 'px-6 pt-6 pb-6',
          className,
        )}
        {...props}
      >
        {children}
      </main>
    );
  },
);

CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: VariantProps<typeof cardVariants>['padding'];
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "flex items-center justify-end gap-4",
          padding === 'none'
            ? 'p-0'
            : padding === 'sm'
              ? 'px-4 pt-0 pb-4'
              : padding === 'lg'
                ? 'px-8 pt-0 pb-8'
                : 'px-6 pt-0 pb-6',
          padding !== 'none' && "border-t border-neutral-200 dark:border-neutral-700 mt-0",
          className,
        )}
        {...props}
      >
        {children}
      </footer>
    );
  },
);

CardFooter.displayName = "CardFooter";

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.HeaderAction = CardHeaderAction;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
