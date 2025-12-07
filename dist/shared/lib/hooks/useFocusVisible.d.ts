import * as React from 'react';
interface UseFocusVisibleProps {
    /**
     * The ref to the element that should have focus visible styles applied.
     */
    ref: React.RefObject<HTMLElement>;
}
export declare const useFocusVisible: (props: UseFocusVisibleProps) => boolean;
export {};
