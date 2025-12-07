import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const textAreaVariants = cva(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors resize-y",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600",
      },
      size: {
        sm: "text-xs py-2 px-3",
        md: "text-sm py-2.5 px-4",
        lg: "text-base py-3 px-4",
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

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size' | 'error'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: VariantProps<typeof textAreaVariants>['variant'];
  size?: VariantProps<typeof textAreaVariants>['size'];
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant,
      size,
      id,
      disabled,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperId = helperText ? `${textareaId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn("flex flex-col group w-full", className)}>
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors"
          >
            {label}
            {props.required && <span className="text-error-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            textAreaVariants({ variant, size, error: !!error }),
            disabled && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !error && "hover:border-neutral-300 dark:hover:border-neutral-600"
          )}
          aria-label={ariaLabel || label}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          {...props}
        />
        {error && (
          <span id={errorId} role="alert" className="text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
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

TextArea.displayName = 'TextArea';

export default TextArea;
