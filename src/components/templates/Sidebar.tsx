import React, { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export type SidebarNavItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: number;
  children?: SidebarNavItem[];
};

const sidebarVariants = cva(
  "flex flex-col h-full border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        collapsible: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SidebarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sidebarVariants> {
  isOpen: boolean;
  onClose?: () => void;
  items: SidebarNavItem[];
  onNavigate?: (href: string) => void;
  header?: React.ReactNode;
  collapsible?: boolean;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({
    className,
    variant,
    isOpen: _isOpen,
    onClose,
    items,
    onNavigate,
    header,
    collapsible: _collapsible,
    ...props
  }, ref) => {
    const [activeHref, setActiveHref] = useState<string>("");

    useEffect(() => {
      const updateActive = () => {
        setActiveHref(window.location.hash || "");
      };
      updateActive();
      window.addEventListener("hashchange", updateActive);
      return () => window.removeEventListener("hashchange", updateActive);
    }, []);

    const handleNavigate = (href: string) => {
      if (onNavigate) onNavigate(href);
      setActiveHref(href);
    };

    return (
      <aside
        ref={ref}
        className={cn(sidebarVariants({ variant }), className)}
        role="navigation"
        aria-label="Sidebar navigation"
        {...props}
      >
        {header && (
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
            {header}
            {variant === 'collapsible' && onClose && (
              <button
                onClick={onClose}
                aria-label="Close sidebar"
                className="p-2 text-neutral-500 rounded-lg hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <nav className="flex-1 overflow-y-auto p-4">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg",
                  isActive
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                )}
                onClick={() => handleNavigate(item.href)}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "h-5 w-5 transition-colors",
                      isActive
                        ? "text-primary-500 dark:text-primary-400"
                        : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                    )}
                  />
                )}
                <span className="flex-1">{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={cn(
                      "flex h-5 min-w-[1.25rem] items-center justify-center px-1.5 text-[10px] font-bold rounded-full",
                      isActive
                        ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                        : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
