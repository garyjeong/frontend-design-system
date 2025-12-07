export type ToastType = 'success' | 'error' | 'info' | 'warning';
export interface ToastItem {
    id: string;
    message: string;
    type?: ToastType;
    duration?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}
export interface ToastProps extends ToastItem {
    onClose: (id: string) => void;
}
export declare const toastVariants: (props?: {
    variant?: "error" | "success" | "warning" | "info";
} & import('class-variance-authority/types').ClassProp) => string;
export declare const Toast: ({ id, message, type, duration, position, onClose, }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export default Toast;
