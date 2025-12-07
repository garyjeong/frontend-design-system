import { useEffect, RefObject } from 'react';

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
export const useClickAway = ({ ref, handler, enabled = true }: UseClickAwayOptions) => {
  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleClickAway = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (!element || element.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', handleClickAway);
    document.addEventListener('touchstart', handleClickAway);

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('touchstart', handleClickAway);
    };
  }, [ref, handler, enabled]);
};

