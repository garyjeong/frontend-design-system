import React, { useCallback, useState, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { TextField } from '@/shared/ui/atoms/input';
import { FaMinus, FaPlus } from 'react-icons/fa';

export const numberInputVariants = cva(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const buttonVariants = cva(
  "flex items-center justify-center w-8 h-8 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
);

export interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  size?: VariantProps<typeof numberInputVariants>['size'];
  label?: string;
  error?: string;
  helperText?: string;
  onChange?: (value: number) => void;
  showControls?: boolean;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = 0,
      min,
      max,
      step = 1,
      precision,
      size,
      label,
      error,
      helperText,
      onChange,
      showControls = true,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;
    const generatedId = useId();
    const inputId = id || generatedId;

    const formatValue = useCallback((val: number): string => {
      if (precision !== undefined) {
        return val.toFixed(precision);
      }
      return val.toString();
    }, [precision]);

    const parseValue = useCallback((str: string): number => {
      const parsed = parseFloat(str);
      if (isNaN(parsed)) return 0;
      return parsed;
    }, []);

    const clampValue = useCallback((val: number): number => {
      let clamped = val;
      if (min !== undefined) clamped = Math.max(clamped, min);
      if (max !== undefined) clamped = Math.min(clamped, max);
      return clamped;
    }, [min, max]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseValue(e.target.value);
      const clampedValue = clampValue(newValue);
      
      if (!isControlled) {
        setUncontrolledValue(clampedValue);
      }
      onChange?.(clampedValue);
    }, [isControlled, onChange, parseValue, clampValue]);

    const handleIncrement = useCallback(() => {
      if (disabled) return;
      const newValue = clampValue(value + step);
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
    }, [disabled, value, step, isControlled, onChange, clampValue]);

    const handleDecrement = useCallback(() => {
      if (disabled) return;
      const newValue = clampValue(value - step);
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
    }, [disabled, value, step, isControlled, onChange, clampValue]);

    const isMin = min !== undefined && value <= min;
    const isMax = max !== undefined && value >= max;

    return (
      <div className={cn(numberInputVariants({ size }), className)}>
        <div className="relative">
          {showControls && (
            <button
              type="button"
              onClick={handleDecrement}
              disabled={disabled || isMin}
              className={cn(
                buttonVariants(),
                "absolute left-1 top-1/2 -translate-y-1/2 z-10"
              )}
              aria-label="Decrease"
            >
              <FaMinus className="text-xs" />
            </button>
          )}
          <TextField
            ref={ref}
            id={inputId}
            type="number"
            value={formatValue(value)}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            label={label}
            error={error}
            helperText={helperText}
            disabled={disabled}
            className={cn(showControls && "pl-10 pr-10")}
            {...props}
          />
          {showControls && (
            <button
              type="button"
              onClick={handleIncrement}
              disabled={disabled || isMax}
              className={cn(
                buttonVariants(),
                "absolute right-1 top-1/2 -translate-y-1/2 z-10"
              )}
              aria-label="Increase"
            >
              <FaPlus className="text-xs" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

