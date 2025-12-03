'use client';

import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';
import styled from 'styled-components';
import { Toast, ToastItem } from './Toast';

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastContainer = styled.div<{ $position: string }>`
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  pointer-events: none;

  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return `
          top: ${({ theme }: any) => theme.spacing.lg};
          left: ${({ theme }: any) => theme.spacing.lg};
          align-items: flex-start;
        `;
      case 'top-right':
        return `
          top: ${({ theme }: any) => theme.spacing.lg};
          right: ${({ theme }: any) => theme.spacing.lg};
          align-items: flex-end;
        `;
      case 'top-center':
        return `
          top: ${({ theme }: any) => theme.spacing.lg};
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      case 'bottom-left':
        return `
          bottom: ${({ theme }: any) => theme.spacing.lg};
          left: ${({ theme }: any) => theme.spacing.lg};
          align-items: flex-start;
        `;
      case 'bottom-right':
        return `
          bottom: ${({ theme }: any) => theme.spacing.lg};
          right: ${({ theme }: any) => theme.spacing.lg};
          align-items: flex-end;
        `;
      case 'bottom-center':
        return `
          bottom: ${({ theme }: any) => theme.spacing.lg};
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      default:
        return `
          top: ${({ theme }: any) => theme.spacing.lg};
          right: ${({ theme }: any) => theme.spacing.lg};
          align-items: flex-end;
        `;
    }
  }}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: ${({ theme }) => theme.spacing.md} !important;
    right: ${({ theme }) => theme.spacing.md} !important;
    transform: none !important;
    align-items: stretch !important;
  }
`;

interface ToastProviderProps {
  children: ReactNode;
  defaultPosition?: ToastItem['position'];
}

export const ToastProvider = ({ children, defaultPosition = 'top-right' }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastItem = {
      ...toast,
      id,
      position: toast.position || defaultPosition,
    };
    setToasts((prev) => [...prev, newToast]);
  }, [defaultPosition]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || defaultPosition;
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(toast);
    return acc;
  }, {} as Record<string, ToastItem[]>);

  const contextValue = useMemo(() => ({ showToast, removeToast }), [showToast, removeToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <ToastContainer key={position} $position={position}>
          {positionToasts.map((toast) => (
            <Toast
              key={toast.id}
              id={toast.id}
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              position={toast.position}
              onClose={removeToast}
            />
          ))}
        </ToastContainer>
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;
