import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export interface ListItem {
  id: string;
  content: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const listVariants = cva(
  "list-none m-0 p-0 w-full bg-white dark:bg-neutral-800 overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-neutral-200 dark:border-neutral-700",
        divided: "border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const listItemVariants = cva(
  "flex items-center gap-4 transition-colors transform",
  {
    variants: {
      dense: {
        true: "py-2 px-4 text-sm",
        false: "py-3 px-5",
      },
      clickable: {
        true: "cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 hover:shadow-md",
        false: "cursor-default",
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed pointer-events-none",
        false: "",
      }
    },
    defaultVariants: {
      dense: false,
      clickable: false,
      disabled: false,
    },
  }
);

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  items: ListItem[];
  dense?: boolean;
  maxHeight?: number | string;
  onItemClick?: (item: ListItem) => void;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({
    items,
    variant,
    dense = false,
    maxHeight,
    onItemClick,
    className,
    ...props
  }, ref) => {
    const handleItemClick = (item: ListItem) => {
      if (item.disabled) return;
      if (item.onClick) item.onClick();
      if (onItemClick) onItemClick(item);
    };

    return (
      <ul
        ref={ref}
        className={cn(listVariants({ variant }), className)}
        role="list"
        style={maxHeight ? { maxHeight, overflowY: 'auto' } : undefined}
        {...props}
      >
        {items.map((item) => {
          const isClickable = !!(item.onClick || onItemClick);
          return (
            <li
              key={item.id}
              className={cn(listItemVariants({ dense, clickable: isClickable, disabled: item.disabled }))}
              onClick={() => handleItemClick(item)}
              role="listitem"
              aria-disabled={item.disabled}
            >
              {item.avatar && (
                <div className="flex-shrink-0 w-10 h-10 overflow-hidden flex items-center justify-center">
                  {item.avatar}
                </div>
              )}
              <div className="flex-1 min-w-0">{item.content}</div>
              {item.action && <div className="flex-shrink-0">{item.action}</div>}
            </li>
          );
        })}
      </ul>
    );
  }
);

List.displayName = "List";

export default List;
