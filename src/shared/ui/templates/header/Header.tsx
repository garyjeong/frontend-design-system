import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const headerVariants = cva(
  "flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "",
        sticky: "sticky top-0 z-50",
        fixed: "fixed top-0 left-0 right-0 z-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({
    className,
    variant,
    logo,
    nav,
    actions,
    ...props
  }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(headerVariants({ variant }), className)}
        role="banner"
        {...props}
      >
        {logo && <div className="flex-shrink-0">{logo}</div>}
        {nav && <nav className="flex-1 flex items-center justify-center">{nav}</nav>}
        {actions && <div className="flex-shrink-0 flex items-center gap-2">{actions}</div>}
      </header>
    );
  }
);

Header.displayName = 'Header';

export default Header;
