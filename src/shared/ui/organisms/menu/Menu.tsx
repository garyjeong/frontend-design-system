import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { IconType } from 'react-icons';

export const menuVariants = cva(
  "flex",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center gap-1",
        vertical: "flex-col gap-1 w-full",
      },
      variant: {
        default: "",
        pills: "p-1 bg-neutral-100 dark:bg-neutral-800",
        tabs: "border-b border-neutral-200 dark:border-neutral-700 gap-6",
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
    },
  }
);

export const menuItemVariants = cva(
  "flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-all duration-200 select-none outline-none",
  {
    variants: {
      active: {
        true: "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20",
        false: "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500/50",
      },
      variant: {
        default: "",
        pills: "", // Handled by container
        tabs: "rounded-none border-b-2 border-transparent px-1 py-3 hover:bg-transparent hover:text-primary-600 dark:hover:text-primary-400",
      }
    },
    compoundVariants: [
      {
        variant: "pills",
        active: true,
        className: "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm",
      },
      {
        variant: "pills",
        active: false,
        className: "hover:bg-white/50 dark:hover:bg-neutral-700/50",
      },
      {
        variant: "tabs",
        active: true,
        className: "bg-transparent border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400",
      }
    ],
    defaultVariants: {
      active: false,
      disabled: false,
      variant: "default",
    },
  }
);

export interface MenuItem {
  id: string;
  label: string;
  icon?: IconType | React.ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  badge?: React.ReactNode;
}

export interface MenuProps extends VariantProps<typeof menuVariants> {
  items: MenuItem[];
  activeItem?: string;
  className?: string;
  onItemClick?: (item: MenuItem) => void;
}

export const Menu = ({
  items,
  activeItem,
  orientation,
  variant,
  className,
  onItemClick,
}: MenuProps) => {
  return (
    <nav className={cn(menuVariants({ orientation, variant, className }))}>
      {items.map((item) => {
        const isActive = activeItem === item.id || activeItem === item.href;
        
        // Determine if icon is a component or element
        const IconRender = item.icon && typeof item.icon === 'function' 
          ? React.createElement(item.icon as IconType, { className: cn("text-lg", isActive ? "text-current" : "text-neutral-400 dark:text-neutral-500 group-hover:text-current") }) 
          : item.icon;

        const content = (
          <>
            {IconRender && (
              <span className="flex items-center justify-center w-5 h-5">
                {typeof IconRender === 'function' ? <IconRender /> : IconRender}
              </span>
            )}
            <span className="truncate">{item.label}</span>
            {item.badge && (
              <span className="ml-auto flex items-center justify-center h-5 px-1.5 text-[10px] font-bold bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                {item.badge}
              </span>
            )}
          </>
        );

        const handleClick = (e: React.MouseEvent) => {
          if (item.disabled) {
            e.preventDefault();
            return;
          }
          item.onClick?.();
          onItemClick?.(item);
        };

        if (item.href) {
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={handleClick}
              className={cn(menuItemVariants({ active: isActive, disabled: item.disabled, variant }), "group")}
              aria-current={isActive ? 'page' : undefined}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            key={item.id}
            onClick={handleClick}
            disabled={item.disabled}
            className={cn(menuItemVariants({ active: isActive, disabled: item.disabled, variant }), "w-full text-left group")}
            type="button"
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
};

export default Menu;
