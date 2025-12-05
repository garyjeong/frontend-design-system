import { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

interface ToastProps extends ToastItem {
  onClose: (id: string) => void;
}

const toastVariants = cva(
  "flex items-center gap-3 p-4 rounded-lg shadow-soft-lg border bg-white dark:bg-neutral-800 min-w-[300px] max-w-[500px] transition-all duration-300 pointer-events-auto",
  {
    variants: {
      variant: {
        success: "border-success-200 bg-success-50 text-success-900 dark:bg-success-900/40 dark:text-success-100 dark:border-success-800",
        error: "border-error-200 bg-error-50 text-error-900 dark:bg-error-900/40 dark:text-error-100 dark:border-error-800",
        warning: "border-warning-200 bg-warning-50 text-warning-900 dark:bg-warning-900/40 dark:text-warning-100 dark:border-warning-800",
        info: "border-info-200 bg-info-50 text-info-900 dark:bg-info-900/40 dark:text-info-100 dark:border-info-800",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return <FaCheckCircle className="text-success-500 dark:text-success-400 text-xl" />;
    case 'error':
      return <FaTimesCircle className="text-error-500 dark:text-error-400 text-xl" />;
    case 'warning':
      return <FaExclamationCircle className="text-warning-500 dark:text-warning-400 text-xl" />;
    default:
      return <FaInfoCircle className="text-info-500 dark:text-info-400 text-xl" />;
  }
};

export const Toast = ({
  id,
  message,
  type = 'info',
  duration = 3000,
  position = 'top-right',
  onClose,
}: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const animFrame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsClosing(true);
        setTimeout(() => {
          onClose(id);
        }, 300);
      }, duration);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(animFrame);
      };
    }
    return () => cancelAnimationFrame(animFrame);
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getTranslateClass = () => {
    if (isVisible && !isClosing) return "translate-x-0 translate-y-0";
    if (position?.includes('top')) return "-translate-y-full opacity-0";
    if (position?.includes('bottom')) return "translate-y-full opacity-0";
    return "translate-x-full opacity-0";
  };

  return (
    <div
      className={cn(
        toastVariants({ variant: type }),
        getTranslateClass(),
        isVisible && !isClosing ? "opacity-100" : "opacity-0"
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0">
        {getIcon(type)}
      </div>
      <div className="flex-1 text-sm font-medium">
        {message}
      </div>
      <button
        onClick={handleClose}
        aria-label="Close toast"
        className="flex-shrink-0 rounded p-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        <FaTimes className="text-sm opacity-70" />
      </button>
    </div>
  );
};

export default Toast;
