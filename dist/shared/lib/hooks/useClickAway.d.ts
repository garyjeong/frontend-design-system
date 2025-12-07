import { RefObject } from 'react';

export interface UseClickAwayOptions {
    /**
     * The ref to the element that should not trigger the callback when clicked.
     */
    ref: RefObject<HTMLElement>;
    /**
     * Callback fired when a click occurs outside the element.
     */
    handler: (event: MouseEvent | TouchEvent) => void;
    /**
     * If `true`, the listener will be enabled.
     */
    enabled?: boolean;
}
/**
 * Hook that triggers a callback when a click occurs outside the specified element.
 * Useful for closing dropdowns, modals, popovers, etc.
 */
export declare const useClickAway: ({ ref, handler, enabled }: UseClickAwayOptions) => void;
