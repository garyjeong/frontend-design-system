import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const switchVariants = cva(
  "relative inline-block transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 cursor-pointer border-2",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-7 w-12",
        lg: "h-9 w-16",
      },
      checked: {
        true: "bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600",
        false: "bg-neutral-200 border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
      disabled: false,
    },
  }
);

export const switchThumbVariants = cva(
  "pointer-events-none inline-block bg-white shadow-lg transition-all duration-300 ease-in-out",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-5 w-5",
        lg: "h-7 w-7",
      },
      checked: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'checked' | 'disabled'> {
  label?: string;
  labelPosition?: 'left' | 'right';
  size?: VariantProps<typeof switchVariants>['size'];
  checked?: boolean;
  disabled?: boolean;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, disabled, onChange, label, labelPosition = 'right', size, id, ...props }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      onChange?.(e);
    };

    const checkedValue = checked ?? false;
    const disabledValue = disabled ?? false;

    // Calculate thumb position based on size
    // Track width - thumb width - left padding (0.5 = 2px)
    // sm: 36px - 14px - 2px = 20px = translate-x-5
    // md: 48px - 20px - 2px = 26px = translate-x-[26px]
    // lg: 64px - 28px - 2px = 34px = translate-x-[34px]
    const thumbTranslate = size === 'sm' 
      ? 'translate-x-5' 
      : size === 'lg' 
      ? 'translate-x-[34px]' 
      : 'translate-x-[26px]';

    return (
      <label htmlFor={switchId} className={cn("flex items-center gap-3", disabledValue && "cursor-not-allowed")}>
        {label && labelPosition === 'left' && (
          <span className={cn("text-sm font-medium text-neutral-700 dark:text-neutral-300", disabledValue && "opacity-60")}>
            {label}
          </span>
        )}
        <input
          type="checkbox"
          id={switchId}
          ref={ref}
          checked={checkedValue}
          disabled={disabledValue}
          onChange={handleToggle}
          className="sr-only"
          role="switch"
          aria-checked={checkedValue}
          aria-label={label}
          {...props}
        />
        <div className={cn(switchVariants({ checked: checkedValue, disabled: disabledValue, size }), className)}>
          <span 
            className={cn(
              switchThumbVariants({ size }),
              checkedValue ? thumbTranslate : "translate-x-0.5",
              "absolute left-0.5 top-1/2 -translate-y-1/2"
            )} 
          />
        </div>
        {label && labelPosition === 'right' && (
          <span className={cn("text-sm font-medium text-neutral-700 dark:text-neutral-300", disabledValue && "opacity-60")}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
