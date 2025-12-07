import * as React from 'react';
interface UseTooltipProps {
    /**
     * The delay in milliseconds before the tooltip appears.
     */
    delay?: number;
    /**
     * The content of the tooltip.
     */
    content: React.ReactNode;
    /**
     * If `true`, the tooltip will be open by default.
     */
    defaultOpen?: boolean;
    /**
     * If `true`, the tooltip will be open.
     */
    open?: boolean;
    /**
     * Callback fired when the tooltip is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
}
interface UseTooltipReturn {
    /**
     * Props to spread on the trigger element.
     */
    triggerProps: React.HTMLAttributes<HTMLElement>;
    /**
     * The ref to the trigger element.
     */
    triggerRef: React.RefObject<HTMLElement | null>;
    /**
     * Props to spread on the tooltip element.
     */
    tooltipProps: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Wether the tooltip is visible.
     */
    isVisible: boolean;
    /**
     * The id of the tooltip content.
     */
    contentId: string;
}
export declare const useTooltip: (props: UseTooltipProps) => UseTooltipReturn;
export {};
