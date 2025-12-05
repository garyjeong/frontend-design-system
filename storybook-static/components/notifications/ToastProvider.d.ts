import { ReactNode } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { ToastItem } from './Toast';

declare const toastContainerVariants: (props?: ({
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ToastContextType {
    showToast: (toast: Omit<ToastItem, 'id'>) => void;
    removeToast: (id: string) => void;
}
interface ToastProviderProps extends VariantProps<typeof toastContainerVariants> {
    children: ReactNode;
}
export declare const ToastProvider: ({ children, position }: ToastProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useToast: () => ToastContextType;
export default ToastProvider;
