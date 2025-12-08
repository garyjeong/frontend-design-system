import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const radioVariants = cva(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-800 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transform transition-all appearance-none cursor-pointer",
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

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      size,
      id,
      checked,
      disabled,
      error,
      helperText,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const radioId = id || generatedId;

    const errorId = error ? `${radioId}-error` : undefined;
    const helperId = helperText ? `${radioId}-helper` : undefined;
    const describedBy = [ariaDescribedBy, errorId, helperId].filter(Boolean).join(' ') || undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-start gap-2">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              checked={checked}
              disabled={disabled}
              onChange={handleChange}
              aria-label={ariaLabel || label}
              aria-checked={checked}
              aria-describedby={describedBy}
              className={cn(
                radioVariants({ size }),
                checked && "border-primary-800 dark:border-primary-800 hover:shadow-md",
                !checked && "hover:border-primary-800 dark:hover:border-primary-400 hover:shadow-md",
                disabled && "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-300",
                className
              )}
              {...props}
            />
            {checked && (
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-primary-800 opacity-100" />
            )}
          </div>
          {label && (
            <label
              htmlFor={radioId}
              className={cn(
                "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
                disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <span id={errorId} role="alert" className="text-xs font-medium text-error-500">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="text-xs text-neutral-500 dark:text-neutral-400">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
