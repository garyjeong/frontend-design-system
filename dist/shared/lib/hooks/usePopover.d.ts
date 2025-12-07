import * as React from 'react';
interface UsePopoverProps {
    /**
     * The content of the popover.
     */
    content: React.ReactNode;
    /**
     * The interaction trigger for the popover.
     */
    trigger?: 'click' | 'hover';
    /**
     * If `true`, the popover will be open by default.
     */
    defaultOpen?: boolean;
    /**
     * If `true`, the popover will be open.
     */
    open?: boolean;
    /**
     * Callback fired when the popover is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
}
interface UsePopoverReturn {
    /**
     * Props to spread on the trigger element.
     */
    triggerProps: React.HTMLAttributes<HTMLElement>;
    /**
     * The ref to the trigger element.
     */
    triggerRef: React.RefObject<HTMLElement | null>;
    /**
     * Props to spread on the popover element.
     */
    popoverProps: React.HTMLAttributes<HTMLDivElement>;
    /**
     * The ref to the popover element.
     */
    popoverRef: React.RefObject<HTMLElement | null>;
    /**
     * Wether the popover is open.
     */
    isOpen: boolean;
    /**
     * The id of the popover content.
     */
    contentId: string;
}
export declare const usePopover: (props: UsePopoverProps) => UsePopoverReturn;
export {};
