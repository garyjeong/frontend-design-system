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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'fullHeight' | 'sidebarPosition'>,
    VariantProps<typeof layoutVariants> {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  fullHeight?: boolean;
  sidebarPosition?: 'left' | 'right';
}

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({
    className,
    variant,
    header,
    sidebar,
    footer,
    children,
    fullHeight,
    sidebarPosition = 'left',
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(layoutVariants({ variant }), fullHeight && 'min-h-screen', className)}
        {...props}
      >
        {header && <header>{header}</header>}
        <div className="flex flex-1 overflow-hidden">
          {sidebarPosition === 'left' && sidebar && <aside className="flex-shrink-0">{sidebar}</aside>}
          <main className="flex-1 overflow-auto">{children}</main>
          {sidebarPosition === 'right' && sidebar && <aside className="flex-shrink-0">{sidebar}</aside>}
        </div>
        {footer && <footer>{footer}</footer>}
      </div>
    );
  }
);

Layout.displayName = 'Layout';

export default Layout;
