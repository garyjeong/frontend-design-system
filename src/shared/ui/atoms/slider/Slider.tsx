import React, { InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const sliderVariants = cva(
  "relative flex items-center w-full touch-action-none select-none cursor-pointer group",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-6",
        lg: "h-8",
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

export const trackVariants = cva(
  "relative w-full bg-neutral-200 dark:bg-neutral-700 transition-colors group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const rangeVariants = cva(
  "absolute h-full bg-primary-500 transition-all duration-150 group-hover:bg-primary-600",
);

export const thumbVariants = cva(
  "absolute top-1/2 -translate-y-1/2 bg-white shadow-md border-2 border-primary-500 dark:bg-white transition-all duration-150 ease-in-out cursor-grab active:cursor-grabbing hover:scale-110 hover:shadow-lg",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      focused: {
        true: "scale-125 ring-4 ring-primary-500/20 shadow-lg",
        false: "",
      },
      active: {
        true: "scale-125 ring-4 ring-primary-500/20 shadow-lg",
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

    const calculateValueFromPosition = useCallback((clientX: number) => {
      if (!sliderRef.current) return value;
      const { left, width } = sliderRef.current.getBoundingClientRect();
      const position = Math.max(0, Math.min(1, (clientX - left) / width));
      return min + position * (max - min);
    }, [min, max, value]);

    const handleTrackInteraction = useCallback((clientX: number) => {
      if (disabled) return;
      const newValue = calculateValueFromPosition(clientX);
      handleChange(newValue);
    }, [disabled, calculateValueFromPosition, handleChange]);

    const handleTrackClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      // thumb를 클릭한 경우는 드래그 모드로 전환하기 위해 이벤트를 전파하지 않음
      if ((e.target as HTMLElement).closest('[data-slider-thumb]')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      handleTrackInteraction(e.clientX);
    }, [disabled, handleTrackInteraction]);

    const handleTrackTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
      if (disabled) return;
      // thumb를 터치한 경우는 드래그 모드로 전환하기 위해 이벤트를 전파하지 않음
      if ((e.target as HTMLElement).closest('[data-slider-thumb]')) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches[0];
      if (touch) {
        handleTrackInteraction(touch.clientX);
      }
    }, [disabled, handleTrackInteraction]);

    const handleThumbMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
      if (disabled) return;
      e.preventDefault();
      e.stopPropagation();
      setIsActive(true);
      
      const isTouch = 'touches' in e;
      const getClientX = (event: MouseEvent | TouchEvent) => 
        'touches' in event ? event.touches[0]?.clientX : (event as MouseEvent).clientX;

      const handleMove = (moveEvent: MouseEvent | TouchEvent) => {
        if (!sliderRef.current) return;
        const clientX = getClientX(moveEvent);
        if (clientX !== undefined) {
          const newValue = calculateValueFromPosition(clientX);
          handleChange(newValue);
        }
      };

      const handleEnd = () => {
        setIsActive(false);
        document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleMove);
        document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleEnd);
      };

      document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleMove);
      document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleEnd);
    }, [disabled, calculateValueFromPosition, handleChange]);

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
        <div 
          className={trackVariants({ size })}
          onClick={handleTrackClick}
          onTouchStart={handleTrackTouchStart}
        >
          <div className={rangeVariants()} style={{ width: `${percentage}%` }} />
          <div
            data-slider-thumb
            className={cn(thumbVariants({ size, focused: isFocused, active: isActive }))}
            style={{ left: `${percentage}%`, transform: `translate(-50%, -50%)` }}
            onMouseDown={handleThumbMouseDown}
            onTouchStart={handleThumbMouseDown}
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
