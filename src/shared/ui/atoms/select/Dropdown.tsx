import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export const dropdownVariants = cva(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600",
      },
      size: {
        sm: "text-xs h-8 px-3 pr-8",
        md: "text-sm h-10 px-4 pr-10",
        lg: "text-base h-12 px-4 pr-10",
      },
      error: {
        true: "border-error-500 focus:border-error-500 focus:ring-error-500/50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: false,
    },
  }
);

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options: DropdownOption[];
  error?: string;
  helperText?: string;
  placeholder?: string;
  variant?: VariantProps<typeof dropdownVariants>['variant'];
  size?: VariantProps<typeof dropdownVariants>['size'];
}

export const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      className,
      label,
      options,
      error,
      helperText,
      variant,
      size,
      placeholder,
      id,
      disabled,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn("flex flex-col w-full", className)}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block"
          >
            {label}
            {props.required && <span className="text-error-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              dropdownVariants({ variant, size, error: !!error }),
              disabled && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !error && "hover:border-neutral-300 dark:hover:border-neutral-600"
            )}
            disabled={disabled}
            aria-label={ariaLabel || label}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            defaultValue={placeholder ? "" : undefined}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500 dark:text-neutral-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 9L1 4h10z"/>
            </svg>
          </div>
        </div>
        {error && (
          <span id={errorId} role="alert" className="text-xs font-medium text-error-500 mt-1.5 block">
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={helperId} className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
