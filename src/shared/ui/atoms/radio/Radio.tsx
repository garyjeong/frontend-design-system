import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const radioVariants = cva(
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

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof radioVariants> {
  label?: string;
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
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const radioId = id || generatedId;

    return (
      <div className="flex items-start gap-2">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            aria-label={ariaLabel || label}
            aria-checked={checked}
            aria-describedby={ariaDescribedBy}
            className={cn(
              radioVariants({ size }),
              checked && "border-primary-500 dark:border-primary-500",
              !checked && "hover:border-primary-500 dark:hover:border-primary-400",
              disabled && "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-300",
              className
            )}
            {...props}
          />
          {checked && (
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-primary-500 opacity-100" />
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
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
