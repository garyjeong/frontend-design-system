import React, { useId, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const checkboxVariants = cva(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-colors appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      indeterminate,
      size,
      id,
      checked,
      disabled,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;
    const inputRef = useRef<HTMLInputElement>(null);
    const combinedRef = (ref || inputRef) as React.RefObject<HTMLInputElement>;

    useEffect(() => {
      if (combinedRef.current) {
        combinedRef.current.indeterminate = indeterminate || false;
      }
    }, [indeterminate, combinedRef]);

    return (
      <div className="flex items-start gap-2">
        <div className="relative flex items-center">
          <input
            ref={combinedRef}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            aria-label={ariaLabel || label}
            aria-checked={indeterminate ? 'mixed' : checked}
            aria-describedby={ariaDescribedBy}
            className={cn(
              checkboxVariants({ size }),
              checked && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              !checked && !indeterminate && "hover:border-primary-500 dark:hover:border-primary-400",
              indeterminate && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              disabled && "disabled:cursor-not-allowed disabled:opacity-50 disabled:checked:bg-neutral-400 disabled:border-neutral-300",
              className
            )}
            {...props}
          />
          {checked && !indeterminate && (
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {indeterminate && (
            <svg
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.33325 7H11.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
              disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
