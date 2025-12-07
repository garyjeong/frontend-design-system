
import * as React from 'react';
import { createPortal } from 'react-dom';

interface UseFocusTrapProps {
  /**
   * If `true`, the focus trap will be enabled.
   */
  enabled?: boolean;
  /**
   * The ref to the container element.
   */
  containerRef: React.RefObject<HTMLElement>;
}

export const useFocusTrap = (props: UseFocusTrapProps) => {
  const { enabled = true, containerRef } = props;

  React.useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const tabbableElements: HTMLElement[] = [];
    container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ).forEach((element) => {
      if (element instanceof HTMLElement) {
        tabbableElements.push(element);
      }
    });

    if (tabbableElements.length === 0) {
      return undefined;
    }

    const firstTabbableElement = tabbableElements[0];
    const lastTabbableElement = tabbableElements[tabbableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          if (document.activeElement === firstTabbableElement) {
            event.preventDefault();
            lastTabbableElement.focus();
          }
        } else {
          if (document.activeElement === lastTabbableElement) {
            event.preventDefault();
            firstTabbableElement.focus();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);

    // Focus on the first tabbable element when the trap is enabled
    firstTabbableElement.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, containerRef]);
};
