import React, { useEffect, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { ThemeToggle } from '@/shared/ui/atoms/theme-toggle';

export type SidebarNavItem = {
  label: string;
  href?: string;
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
      position: {
        left: "left-0",
        right: "right-0",
      }
    },
    defaultVariants: {
      variant: "default",
      position: 'left'
    },
  }
);

export interface SidebarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'position'>,
    VariantProps<typeof sidebarVariants> {
  isOpen?: boolean;
  onClose?: () => void;
  items?: SidebarNavItem[];
  onNavigate?: (href: string) => void;
  header?: React.ReactNode;
  collapsible?: boolean;
  showThemeToggle?: boolean;
  width?: string;
  position?: 'left' | 'right';
  children?: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
    className,
    variant,
      isOpen = true,
    onClose,
      items = [],
    onNavigate,
    header,
      collapsible = false,
      showThemeToggle = false,
      width,
      position = 'left',
      children,
    ...props
  }, ref) => {
    const [activeHref, setActiveHref] = useState<string>("");
    const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

    useEffect(() => {
      const updateActive = () => {
        setActiveHref(window.location.hash || "");
      };
      updateActive();
      window.addEventListener("hashchange", updateActive);
      return () => window.removeEventListener("hashchange", updateActive);
    }, []);

    useEffect(() => {
      if (!activeHref) return;
      const findGroupForHref = (items: SidebarNavItem[], targetHref: string): string | null => {
        for (const item of items) {
          if (item.children) {
            const hasActiveChild = item.children.some(child => child.href === targetHref);
            if (hasActiveChild) return item.label;
            const found = findGroupForHref(item.children, targetHref);
            if (found) return found;
          }
        }
        return null;
      };
      const groupLabel = findGroupForHref(items, activeHref);
      if (groupLabel) {
        setExpandedGroups(prev => new Set([...prev, groupLabel]));
      }
    }, [activeHref, items]);

    const handleNavigate = (href: string) => {
      if (onNavigate && href) onNavigate(href);
      if (href) setActiveHref(href);
    };

    const toggleGroup = (groupLabel: string) => {
      setExpandedGroups(prev => {
        const next = new Set(prev);
        if (next.has(groupLabel)) next.delete(groupLabel); else next.add(groupLabel);
        return next;
      });
    };

    const getFirstChildHref = (item: SidebarNavItem): string | undefined => {
      if (item.children && item.children.length > 0) {
        return item.children[0].href || getFirstChildHref(item.children[0]);
      }
      return item.href;
    };

    const handleGroupClick = (item: SidebarNavItem) => {
      if (item.children && item.children.length > 0) {
        toggleGroup(item.label);
        const firstHref = getFirstChildHref(item);
        if (firstHref && onNavigate) onNavigate(firstHref);
      } else if (item.href) {
        handleNavigate(item.href);
      }
    };

    if (!isOpen) return null;

    const finalVariant = collapsible ? 'collapsible' : variant;

    return (
      <aside
        ref={ref}
        className={cn(sidebarVariants({ variant: finalVariant, position }), className)}
        role="navigation"
        aria-label="Sidebar navigation"
        style={{ width }}
        {...props}
      >
        {(header || (collapsible && onClose) || showThemeToggle) && (
          <div className="flex items-center justify-between gap-3 p-4 border-b border-neutral-200 dark:border-neutral-700">
            {header && <div className="flex-1">{header}</div>}
            <div className="flex items-center gap-2">
              {showThemeToggle && <ThemeToggle />}
              {collapsible && onClose && (
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
          </div>
        )}
        <nav className="flex-1 overflow-y-auto p-4 pt-6">
          {children}
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isGroup = hasChildren;
            const isExpanded = isGroup && expandedGroups.has(item.label);
            const Icon = item.icon;
            const isActive = isGroup ? item.children?.some(child => child.href === activeHref) || false : activeHref === item.href;
            return (
              <div key={item.label} className="mb-1">
                <button
                  onClick={() => handleGroupClick(item)}
                  className={cn(
                    "group relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
                    isGroup
                      ? isActive
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                        : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                      : isActive
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                      : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                  )}
                >
                  {Icon && (
                    <Icon
                      className={cn(
                        "h-5 w-5 transition-colors flex-shrink-0",
                        isActive
                          ? "text-primary-800 dark:text-primary-400"
                          : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                      )}
                    />
                  )}
                  {isGroup && (
                    <span className="flex-shrink-0">
                      {isExpanded ? (
                        <FaChevronDown className="h-3.5 w-3.5 text-neutral-400 transition-transform" />
                      ) : (
                        <FaChevronRight className="h-3.5 w-3.5 text-neutral-400 transition-transform" />
                      )}
                    </span>
                  )}
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={cn(
                        "flex h-5 min-w-[1.25rem] items-center justify-center px-1.5 text-[10px] font-bold flex-shrink-0",
                        isActive
                          ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>

                {isGroup && isExpanded && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {item.children?.map((child) => {
                      const isChildActive = activeHref === child.href;
                      const ChildIcon = child.icon;
                      return (
                        <a
                          key={child.href}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(child.href || '');
                          }}
                          className={cn(
                            "group relative flex w-full items-center gap-3 pl-8 pr-4 py-2.5 text-xs font-medium transition-all duration-200",
                            isChildActive
                              ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400"
                              : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                          )}
                        >
                          {ChildIcon && (
                            <ChildIcon
                              className={cn(
                                "h-4 w-4 transition-colors flex-shrink-0",
                                isChildActive
                                  ? "text-primary-800 dark:text-primary-400"
                                  : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                              )}
                            />
                          )}
                          <span className="flex-1">{child.label}</span>
                          {child.badge !== undefined && (
                            <span
                              className={cn(
                                "flex h-4 min-w-[1rem] items-center justify-center px-1 text-[10px] font-bold flex-shrink-0",
                                isChildActive
                                  ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                                  : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                              )}
                            >
                              {child.badge}
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    );
  }
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
