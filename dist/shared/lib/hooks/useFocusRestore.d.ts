import * as React from 'react';
interface UseFocusRestoreProps {
    /**
     * If `true`, the focus will be restored when the component unmounts.
     */
    enabled?: boolean;
    /**
     * The ref to the element that should receive focus when the component unmounts.
     * If not provided, the element that had focus before the component mounted will be used.
     */
    restoreElementRef?: React.RefObject<HTMLElement>;
}
export declare const useFocusRestore: (props: UseFocusRestoreProps) => void;
export {};
