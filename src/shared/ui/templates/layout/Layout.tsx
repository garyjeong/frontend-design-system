import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const layoutVariants = cva(
  "min-h-screen flex flex-col bg-background-light dark:bg-background-dark",
  {
    variants: {
      variant: {
        default: "",
        sidebar: "",
        "header-footer": "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({
    className,
    variant,
    header,
    sidebar,
    footer,
    children,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(layoutVariants({ variant }), className)}
        {...props}
      >
        {header && <header>{header}</header>}
        <div className="flex flex-1 overflow-hidden">
          {sidebar && <aside className="flex-shrink-0">{sidebar}</aside>}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        {footer && <footer>{footer}</footer>}
      </div>
    );
  }
);

Layout.displayName = 'Layout';

export default Layout;
