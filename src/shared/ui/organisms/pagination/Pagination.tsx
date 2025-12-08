import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const paginationVariants = cva(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const paginationButtonVariants = cva(
  "flex items-center justify-center min-w-[40px] h-10 px-2 text-sm font-medium transform transition-all duration-200 border rounded",
  {
    variants: {
      variant: {
        page: "bg-transparent border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-primary-800 hover:border-primary-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:shadow-md",
        ellipsis: "border-transparent text-neutral-500 dark:text-neutral-400 cursor-default",
      },
      active: {
        true: "bg-white border-primary text-primary font-semibold dark:bg-neutral-800 dark:border-primary-500 dark:text-primary-400",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed !bg-transparent !text-neutral-600 !border-neutral-200 dark:!text-neutral-300 dark:!border-neutral-700",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: 'page',
        className: "hover:bg-white dark:hover:bg-neutral-800 border-primary text-primary dark:text-primary-400",
      },
    ],
    defaultVariants: {
      variant: 'page',
      active: false,
      disabled: false,
    },
  }
);

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'maxVisible' | 'hrefBuilder'>,
    VariantProps<typeof paginationVariants> {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisible?: number;
  hrefBuilder?: (page: number) => string;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      showFirstLast = false,
      showPrevNext = true,
      maxVisible = 5,
      hrefBuilder,
      size,
      className,
      ...props
    },
    ref,
  ) => {
    const getPageNumbers = () => {
      const pages: (number | 'ellipsis')[] = [];
      const halfVisible = Math.floor(maxVisible / 2);

      if (totalPages <= maxVisible) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      if (currentPage <= halfVisible + 1) {
        for (let i = 1; i <= maxVisible - 1; i += 1) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - maxVisible + 2; i <= totalPages; i += 1) pages.push(i);
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - Math.floor((maxVisible - 3) / 2); i <= currentPage + Math.floor((maxVisible - 3) / 2); i += 1) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
      return pages;
    };

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page);
      }
    };

    if (totalPages <= 1) return null;

    const renderItem = ({
      page,
      label,
      icon,
      disabled = false,
    }: {
      page: number | 'ellipsis';
      label: string;
      icon?: React.ReactNode;
      disabled?: boolean;
    }) => {
      const isEllipsis = page === 'ellipsis';
      const isActive = page === currentPage;
      const key = typeof page === 'number' ? `page-${page}` : `item-${label}`;
      const commonProps = {
        className: cn(paginationButtonVariants({ variant: isEllipsis ? 'ellipsis' : 'page', active: isActive, disabled })),
        'aria-label': label,
        'aria-current': isActive ? ('page' as const) : undefined,
        'aria-disabled': disabled,
      } as const;

      if (isEllipsis) {
        return <span key={key} {...commonProps}>...</span>;
      }

      const content = icon || page;
      const href = typeof page === 'number' && hrefBuilder ? hrefBuilder(page) : undefined;

      if (href) {
        return (
          <a
            key={key}
            href={href}
            {...commonProps}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page as number);
            }}
          >
            {content}
          </a>
        );
      }

      return (
        <button
          key={key}
          type="button"
          onClick={() => handlePageChange(page as number)}
          disabled={disabled}
          {...commonProps}
        >
          {content}
        </button>
      );
    };

    const pageNumbers = getPageNumbers();

    return (
      <nav
        ref={ref}
        className={cn(paginationVariants({ size }), className)}
        aria-label="Pagination"
        {...props}
      >
        {showFirstLast && renderItem({ page: 1, label: "First page", icon: (
          <div className="flex"><FaChevronLeft size={12} /><FaChevronLeft size={12} className="-ml-1" /></div>
        ), disabled: currentPage === 1 })}
        {showPrevNext && renderItem({ page: Math.max(1, currentPage - 1), label: "Previous page", icon: <FaChevronLeft size={14} />, disabled: currentPage === 1 })}
        {pageNumbers.map((page, index) => renderItem({ page, label: page === 'ellipsis' ? `ellipsis-${index}` : `Page ${page}` }))}
        {showPrevNext && renderItem({ page: Math.min(totalPages, currentPage + 1), label: "Next page", icon: <FaChevronRight size={14} />, disabled: currentPage === totalPages })}
        {showFirstLast && renderItem({ page: totalPages, label: "Last page", icon: (
          <div className="flex"><FaChevronRight size={12} /><FaChevronRight size={12} className="-ml-1" /></div>
        ), disabled: currentPage === totalPages })}
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export default Pagination;
