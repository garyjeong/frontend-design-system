
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

export const useFocusRestore = ({ enabled = true, restoreElementRef: externalRestoreElementRef }: UseFocusRestoreProps = {}) => {
  const internalRestoreElementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    internalRestoreElementRef.current = document.activeElement as HTMLElement;
    const elementToRestore = internalRestoreElementRef.current;

    return () => {
      if (enabled) {
        const targetElement = externalRestoreElementRef?.current || elementToRestore;
        if (
          targetElement &&
          document.body.contains(targetElement)
        ) {
          targetElement.focus({ preventScroll: true });
        }
      }
    };
  }, [enabled, externalRestoreElementRef]);

  return internalRestoreElementRef;
};
