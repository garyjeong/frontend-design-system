import React, { useState, useEffect } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  content?: React.ReactNode;
}

export const tabsVariants = cva(
  "flex items-center gap-0.5 border-b border-neutral-200 dark:border-neutral-700",
);

export const tabTriggerVariants = cva(
  "relative flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50",
        underlined: "border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50",
        pills: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200",
      },
      active: {
        true: "",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-neutral-600",
        false: "cursor-pointer",
      },
      fullWidth: {
        true: "flex-1",
        false: "",
      }
    },
    compoundVariants: [
      {
        variant: "default",
        active: true,
        className: "border-primary-500 text-primary-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-transparent font-semibold",
      },
      {
        variant: "underlined",
        active: true,
        className: "border-primary-500 text-primary-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-transparent font-semibold",
      },
      {
        variant: "pills",
        active: true,
        className: "bg-primary-500 text-white hover:bg-primary-600 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400 font-semibold",
      },
    ],
    defaultVariants: {
      variant: "default",
      active: false,
      disabled: false,
      fullWidth: false,
    },
  }
);

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: 'default' | 'underlined' | 'pills';
  fullWidth?: boolean;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    items,
    value: controlledValue,
    defaultValue,
    onValueChange,
    variant = 'default',
    fullWidth = false,
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue || (items.length > 0 ? items[0].value : ''));
    
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    useEffect(() => {
      if (isControlled) {
        setInternalValue(controlledValue);
      }
    }, [controlledValue, isControlled]);

    const handleTabChange = (tabValue: string, disabled?: boolean) => {
      if (disabled) return;
      if (!isControlled) {
        setInternalValue(tabValue);
      }
      onValueChange?.(tabValue);
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
                className={cn(tabTriggerVariants({ variant, active: isActive, disabled: item.disabled, fullWidth }))}
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
