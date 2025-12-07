import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';
import { cn } from '@/utils/cn';
import { useInput } from '@/hooks/useInput';

const textFieldVariants = cva(
  "w-full border rounded-lg bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600",
      },
      size: {
        sm: "text-xs h-8 px-3",
        md: "text-sm h-10 px-4",
        lg: "text-base h-12 px-4",
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

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'error' | 'disabled' | 'readOnly' | 'required' | 'value' | 'defaultValue' | 'onChange'> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  variant?: VariantProps<typeof textFieldVariants>['variant'];
  size?: VariantProps<typeof textFieldVariants>['size'];
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      variant,
      size,
      id,
      icon: Icon,
      iconPosition = 'left',
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      disabled: disabledProp,
      readOnly: readOnlyProp,
      required: requiredProp,
      value: valueProp,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    const { inputProps, disabled, required } = useInput({
      inputRef: ref,
      disabled: disabledProp,
      readOnly: readOnlyProp,
      required: requiredProp,
      value: valueProp,
      defaultValue,
      onChange,
      id: inputId,
      'aria-label': ariaLabel || label,
      'aria-invalid': error ? 'true' : undefined,
      'aria-describedby': describedBy,
      ...props,
    });

    return (
      <div className={cn("flex flex-col group w-full", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors"
          >
            {label}
            {required && <span className="text-error-500 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <div className="relative">
          {Icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500">
              <Icon className="text-lg" />
            </div>
          )}
          <input
            className={cn(
              textFieldVariants({ variant, size, error: !!error }),
              Icon && iconPosition === 'left' && "pl-10",
              Icon && iconPosition === 'right' && "pr-10",
              disabled && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !error && "hover:border-neutral-300 dark:hover:border-neutral-600"
            )}
            {...inputProps}
          />
          {Icon && iconPosition === 'right' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500">
              <Icon className="text-lg" />
            </div>
          )}
        </div>
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

TextField.displayName = 'TextField';

export default TextField;
