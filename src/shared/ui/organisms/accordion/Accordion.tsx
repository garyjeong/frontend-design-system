import React, { useState, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { FaChevronDown } from 'react-icons/fa';

const accordionVariants = cva(
  "w-full border border-neutral-200 dark:border-neutral-700 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-neutral-800",
        filled: "bg-neutral-50 dark:bg-neutral-900",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const accordionItemVariants = cva(
  "border-b border-neutral-200 dark:border-neutral-700 last:border-b-0",
);

const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between px-4 py-3 text-left font-medium text-neutral-900 dark:text-neutral-100 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-inset",
  {
    variants: {
      expanded: {
        true: "bg-neutral-50 dark:bg-neutral-900",
        false: "",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
);

const accordionContentVariants = cva(
  "overflow-hidden transition-all duration-300 ease-in-out bg-neutral-50 dark:bg-neutral-900/50",
  {
    variants: {
      expanded: {
        true: "max-h-[1000px] opacity-100",
        false: "max-h-0 opacity-0",
      },
    },
    defaultVariants: {
      expanded: false,
    },
  }
);

export interface AccordionItem {
  id?: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
  defaultExpanded?: boolean;
}

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpanded?: string[];
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      variant,
      items,
      allowMultiple = false,
      defaultExpanded = [],
      ...props
    },
    ref,
  ) => {
    const [expandedItems, setExpandedItems] = useState<Set<string>>(
      new Set(defaultExpanded)
    );
    const baseId = useId();

    const toggleItem = (itemId: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          if (!allowMultiple) {
            newSet.clear();
          }
          newSet.add(itemId);
        }
        return newSet;
      });
    };

    return (
      <div
        ref={ref}
        className={cn(accordionVariants({ variant }), className)}
        {...props}
      >
        {items.map((item, index) => {
          const itemId = item.id || `accordion-item-${index}`;
          const isExpanded = expandedItems.has(itemId);
          const triggerId = `${baseId}-trigger-${index}`;
          const contentId = `${baseId}-content-${index}`;

          return (
            <div
              key={itemId}
              className={accordionItemVariants()}
            >
              <button
                id={triggerId}
                type="button"
                onClick={() => !item.disabled && toggleItem(itemId)}
                disabled={item.disabled}
                aria-expanded={isExpanded}
                aria-controls={contentId}
                className={cn(
                  accordionTriggerVariants({ expanded: isExpanded }),
                  item.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <span>{item.title}</span>
                <FaChevronDown
                  className={cn(
                    "text-neutral-500 dark:text-neutral-400 transition-transform duration-300",
                    isExpanded && "transform rotate-180"
                  )}
                />
              </button>
              <div
                id={contentId}
                role="region"
                aria-labelledby={triggerId}
                className={cn(
                  accordionContentVariants({ expanded: isExpanded }),
                  "px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                )}
              >
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;

