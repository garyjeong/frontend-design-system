import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  content?: React.ReactNode;
}

const tabsVariants = cva(
  "flex items-center gap-1 border-b border-neutral-200 dark:border-neutral-700",
);

const tabTriggerVariants = cva(
  "flex items-center justify-center gap-2 px-4 py-2 text-base font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500/50",
  {
    variants: {
      variant: {
        default: "border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800",
        underlined: "border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800",
        pills: "rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
      },
      active: {
        true: "",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-neutral-500",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className: "border-primary-500 text-primary-500 hover:text-primary-500 hover:bg-transparent dark:text-primary-400 dark:hover:text-primary-400 dark:hover:bg-transparent",
      },
      {
        variant: "underlined",
        active: true,
        className: "border-primary-500 text-primary-500 hover:text-primary-500 hover:bg-transparent dark:text-primary-400 dark:hover:text-primary-400 dark:hover:bg-transparent",
      },
      {
        variant: "pills",
        active: true,
        className: "bg-primary-500 text-white hover:bg-primary-600 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400",
      },
    ],
    defaultVariants: {
      variant: "default",
      active: false,
      disabled: false,
    },
  }
);

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  variant?: 'default' | 'underlined' | 'pills';
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    items,
    value,
    onValueChange,
    variant = 'default',
    className,
    ...props
  }, ref) => {
    const handleTabChange = (tabValue: string, disabled?: boolean) => {
      if (disabled) return;
      onValueChange(tabValue);
    };

    const activeTab = items.find((item) => item.value === value);

    return (
      <div ref={ref} className={cn("flex flex-col w-full", className)} {...props}>
        <div
          role="tablist"
          aria-label="Tabs"
          className={cn(
            tabsVariants(),
            variant === 'pills' && "border-b-0 gap-1"
          )}
        >
          {items.map((item) => {
            const isActive = value === item.value;
            return (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.value}`}
                id={`tab-${item.value}`}
                onClick={() => handleTabChange(item.value, item.disabled)}
                tabIndex={item.disabled ? -1 : isActive ? 0 : -1}
                disabled={item.disabled}
                aria-disabled={item.disabled}
                className={cn(tabTriggerVariants({ variant, active: isActive, disabled: item.disabled }))}
              >
                {item.icon && <span className="text-lg">{item.icon}</span>}
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
        {activeTab && activeTab.content && (
          <div
            id={`tabpanel-${activeTab.value}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.value}`}
            className="py-4 w-full text-neutral-600 dark:text-neutral-300"
          >
            {activeTab.content}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

export default Tabs;
