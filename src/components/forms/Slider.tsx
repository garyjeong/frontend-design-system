import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const sliderVariants = cva(
  "relative flex items-center w-full touch-action-none select-none",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6",
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);

const trackVariants = cva(
  "relative w-full rounded-full bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-1.5",
        lg: "h-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const rangeVariants = cva(
  "absolute h-full rounded-full bg-primary-500",
);

const thumbVariants = cva(
  "block rounded-full bg-white shadow-soft-sm border border-neutral-300 dark:bg-primary-500 dark:border-primary-400 transition-transform duration-100 ease-in-out transform scale-100",
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5",
      },
      focused: {
        true: "scale-110 ring-2 ring-primary-500/30",
        false: "",
      },
      active: {
        true: "scale-110 ring-2 ring-primary-500/30",
        false: "",
      }
    },
    defaultVariants: {
      size: "md",
      focused: false,
      active: false,
    },
  }
);

export interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'min' | 'max' | 'onChange' | 'disabled' | 'size'>,
    VariantProps<typeof sliderVariants> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    { className, value: controlledValue, defaultValue = 0, min = 0, max = 100, step = 1, onChange, disabled = false, size, ...props },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const isControlled = typeof controlledValue === 'number';
    const value = isControlled ? controlledValue : uncontrolledValue;

    const sliderRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const getPercentage = useCallback((val: number) => ((val - min) / (max - min)) * 100, [min, max]);
    const percentage = getPercentage(value);

    const handleChange = useCallback(
      (newValue: number) => {
        const clampedValue = Math.max(min, Math.min(max, newValue));
        const steppedValue = Math.round(clampedValue / step) * step;

        if (!isControlled) {
          setUncontrolledValue(steppedValue);
        }
        onChange?.(steppedValue);
      },
      [min, max, step, isControlled, onChange],
    );

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      setIsActive(true);
      e.preventDefault();
      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!sliderRef.current) return;
        const { left, width } = sliderRef.current.getBoundingClientRect();
        const clientX = moveEvent.clientX;
        const newPosition = (clientX - left) / width;
        const newValue = min + newPosition * (max - min);
        handleChange(newValue);
      };

      const handleMouseUp = () => {
        setIsActive(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [disabled, min, max, handleChange]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;
        let newValue = value;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          newValue = value + step;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          newValue = value - step;
        }
        if (newValue !== value) {
          e.preventDefault();
          handleChange(newValue);
        }
      },
      [disabled, value, step, handleChange],
    );

    return (
      <div
        ref={sliderRef}
        className={cn(sliderVariants({ disabled, size }), className)}
        onMouseDown={handleMouseDown}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={props['aria-label'] || 'Slider'}
        aria-disabled={disabled || undefined}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
      >
        <div className={trackVariants({ size })}>
          <div className={rangeVariants()} style={{ width: `${percentage}%` }} />
          <div
            className={cn(thumbVariants({ size, focused: isFocused, active: isActive }))}
            style={{ left: `${percentage}%`, transform: `translateX(-${percentage}%)` }}
          />
        </div>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          disabled={disabled || undefined}
          className="sr-only"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={props['aria-label'] || 'Slider'}
        />
      </div>
    );
  },
);

Slider.displayName = 'Slider';

export default Slider;
