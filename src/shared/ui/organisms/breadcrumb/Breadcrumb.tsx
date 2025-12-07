import React from 'react';
import { cn } from '@/shared/lib/utils/cn';
import { FaChevronRight } from 'react-icons/fa';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator = <FaChevronRight className="text-neutral-400 dark:text-neutral-500 mx-2 text-xs" />, className, ...props }, ref) => {
    return (
      <nav aria-label="breadcrumb" className={cn("flex", className)} ref={ref} {...props}>
        <ol className="flex items-center space-x-0">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.href ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{item.label}</span>
              )}
              {index < items.length - 1 && separator}
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
