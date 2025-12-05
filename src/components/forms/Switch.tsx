import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const switchVariants = cva(
  "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-8 w-14",
      },
      checked: {
        true: "bg-primary-500",
        false: "bg-neutral-200 dark:bg-neutral-700",
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
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

const switchThumbVariants = cva(
  "pointer-events-none inline-block rounded-full bg-white shadow-soft-sm ring-0 transition-transform duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-7 w-7",
      },
      checked: {
        true: "",
        false: "translate-x-0",
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

    const thumbTranslate = size === 'sm' ? 'translate-x-3' : size === 'lg' ? 'translate-x-6' : 'translate-x-5';

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
              checkedValue ? thumbTranslate : "translate-x-0"
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
