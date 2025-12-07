import * as React from 'react';
interface UseFocusTrapProps {
    /**
     * If `true`, the focus trap will be enabled.
     */
    enabled?: boolean;
    /**
     * The ref to the container element.
     */
    containerRef: React.RefObject<HTMLElement | null>;
}
export declare const useFocusTrap: (props: UseFocusTrapProps) => void;
export {};
