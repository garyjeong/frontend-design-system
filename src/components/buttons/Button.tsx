import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconType } from 'react-icons';
import { cn } from '@/utils/cn';
import { useButton } from '@/hooks/useButton';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark disabled:cursor-not-allowed disabled:opacity-50 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 shadow-soft-sm border border-transparent",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border border-transparent",
        outline: "bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20",
        ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-transparent",
        link: "bg-transparent text-primary-500 hover:underline underline-offset-4 p-0 h-auto border-none dark:text-primary-400",
        danger: "bg-error-500 text-white hover:bg-error-600 dark:bg-error-500 dark:hover:bg-error-400 shadow-soft-sm border border-transparent",
      },
      size: {
        small: "text-xs h-8 px-3 rounded-lg",
        medium: "text-sm h-10 px-4 rounded-lg",
        large: "text-base h-12 px-6 rounded-lg",
        icon: "h-10 w-10 p-0 rounded-lg",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded-sm",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      fullWidth: false,
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, rounded, icon: Icon, iconPosition = 'left', children, disabled: disabledProp, loading: loadingProp, onClick, ...props }, ref) => {
    const { buttonProps, loading } = useButton({
      buttonRef: ref,
      disabled: disabledProp,
      loading: loadingProp,
      onClick,
      ...props,
    });

    const isIconOnly = !children && !!Icon;
    
    return (
      <button
        className={cn(buttonVariants({ variant, size: isIconOnly ? 'icon' : size, fullWidth, rounded }), className)}
        {...buttonProps}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!loading && Icon && iconPosition === 'left' && <Icon className="text-lg" />}
        {children}
        {!loading && Icon && iconPosition === 'right' && <Icon className="text-lg" />}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
