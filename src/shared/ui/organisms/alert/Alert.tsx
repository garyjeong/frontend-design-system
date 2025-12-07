import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import { type IconType } from 'react-icons/lib';

const alertVariants = cva(
  "flex items-start gap-3 p-4 shadow-soft-sm transition-colors duration-200",
  {
    variants: {
      variant: {
        info: "bg-info-50 text-info-800 border border-info-200 dark:bg-info-950 dark:text-info-200 dark:border-info-800",
        success: "bg-success-50 text-success-800 border border-success-200 dark:bg-success-950 dark:text-success-200 dark:border-success-800",
        warning: "bg-warning-50 text-warning-800 border border-warning-200 dark:bg-warning-950 dark:text-warning-200 dark:border-warning-800",
        error: "bg-error-50 text-error-800 border border-error-200 dark:bg-error-950 dark:text-error-200 dark:border-error-800",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const iconVariants: Record<NonNullable<VariantProps<typeof alertVariants>['variant']>, IconType> = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationTriangle,
  error: FaTimesCircle,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  description: string;
  showIcon?: boolean;
  closable?: boolean;
  onClose?: () => void;
  action?: React.ReactNode;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, description, showIcon = true, closable = false, onClose, action, ...props }, ref) => {
    const resolvedVariant = variant ?? 'info';
    const Icon = iconVariants[resolvedVariant];

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, className }))}
        role="alert"
        {...props}
      >
        {showIcon && Icon && (
          <Icon className="flex-shrink-0 text-xl" />
        )}
        <div className="flex-1">
          {title && <h4 className="text-lg font-semibold mb-1">{title}</h4>}
          <p className="text-sm">{description}</p>
        </div>
        {action && <div className="flex-shrink-0 ml-auto">{action}</div>}
        {closable && (
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 -mr-1 -mt-1 transition-colors duration-150 hover:bg-current/[0.1]"
            aria-label="Close alert"
          >
            <FaTimesCircle className="text-lg opacity-70" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
