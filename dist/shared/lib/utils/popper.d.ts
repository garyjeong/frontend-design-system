export type Placement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export interface PopperOptions {
    placement?: Placement;
    offset?: number;
    flip?: boolean;
    shift?: boolean;
}
export interface PopperPosition {
    top: number;
    left: number;
    placement: Placement;
}
/**
 * Calculate the position for a popper element relative to a reference element.
 * This is a simplified version of popper positioning logic.
 */
export declare const computePopperPosition: (referenceElement: HTMLElement, popperElement: HTMLElement, options?: PopperOptions) => PopperPosition;
/**
 * Hook-like function to update popper position
 */
export declare const updatePopperPosition: (referenceElement: HTMLElement | null, popperElement: HTMLElement | null, options?: PopperOptions) => PopperPosition | null;
