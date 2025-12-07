'use client';

import {
  createContext, useContext, useState, useCallback, useMemo, ReactNode,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Toast, ToastItem } from './Toast';
import { cn } from '@/shared/lib/utils/cn';

// --- CVA Variants ---

const toastContainerVariants = cva(
  'fixed z-[9999] flex flex-col gap-4 p-4 pointer-events-none',
  {
    variants: {
      position: {
        'top-left': 'top-0 left-0 items-start',
        'top-center': 'top-0 left-1/2 -translate-x-1/2 items-center',
        'top-right': 'top-0 right-0 items-end',
        'bottom-left': 'bottom-0 left-0 items-start',
        'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 items-center',
        'bottom-right': 'bottom-0 right-0 items-end',
      },
    },
    defaultVariants: {
      position: 'top-right',
    },
  }
);


// --- Interfaces & Context ---

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);


// --- Provider Component ---

export interface ToastProviderProps extends VariantProps<typeof toastContainerVariants> {
  children: ReactNode;
}

export const ToastProvider = ({ children, position = 'top-right' }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const toastPosition: NonNullable<ToastItem['position']> = (toast.position || position) as NonNullable<ToastItem['position']>;
    const newToast: ToastItem = {
      ...toast,
      id,
      position: toastPosition,
    };
    setToasts((prev) => [...prev, newToast]);
  }, [position]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const groupedToasts = useMemo(() => toasts.reduce((acc, toast) => {
    const toastPos: NonNullable<ToastItem['position']> = (toast.position || position) as NonNullable<ToastItem['position']>;
    if (!acc[toastPos]) {
      acc[toastPos] = [];
    }
    acc[toastPos].push(toast);
    return acc;
  }, {} as Record<NonNullable<ToastItem['position']>, ToastItem[]>), [toasts, position]);

  const contextValue = useMemo(() => ({ showToast, removeToast }), [showToast, removeToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {Object.entries(groupedToasts).map(([pos, posToasts]) => (
        <div
          key={pos}
          className={cn(toastContainerVariants({ position: pos as VariantProps<typeof toastContainerVariants>['position'] }))}
        >
          {posToasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onClose={removeToast}
            />
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
};


// --- Hook ---

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;
