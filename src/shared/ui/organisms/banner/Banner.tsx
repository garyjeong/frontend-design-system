import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const bannerVariants = cva(
  "flex items-center justify-between gap-4 p-4 text-white shadow-soft-sm",
  {
    variants: {
      variant: {
        info: "bg-info-600",
        success: "bg-success-600",
        warning: "bg-warning-600",
        error: "bg-error-600",
        neutral: "bg-neutral-700",
      },
      position: {
        top: "fixed top-0 left-0 right-0 z-50",
        static: "relative",
      }
    },
    defaultVariants: {
      variant: "neutral",
      position: "top",
    },
  }
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  message: string;
  action?: React.ReactNode;
  onClose?: () => void;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, variant, position, message, action, onClose, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleClose = () => {
      setIsVisible(false);
      onClose?.();
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={cn(bannerVariants({ variant, position, className }))}
        role="banner"
        {...props}
      >
        <p className="text-sm font-medium flex-1">{message}</p>
        {action && <div className="flex-shrink-0">{action}</div>}
        {onClose && (
          <button
            onClick={handleClose}
            className="flex-shrink-0 ml-auto p-1 transition-colors duration-150 hover:bg-white/20"
            aria-label="Close banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Banner.displayName = 'Banner';

export default Banner;
