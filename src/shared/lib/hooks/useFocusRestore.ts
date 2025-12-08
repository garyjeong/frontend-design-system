
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

export const useFocusRestore = ({ enabled = true }: UseFocusRestoreProps = {}) => {
  const restoreElementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    restoreElementRef.current = document.activeElement as HTMLElement;
    const elementToRestore = restoreElementRef.current;

    return () => {
      if (
        enabled &&
        elementToRestore &&
        document.body.contains(elementToRestore)
      ) {
        elementToRestore.focus({ preventScroll: true });
      } else if (enabled && restoreElementRef.current instanceof HTMLElement) {
        restoreElementRef.current.focus({ preventScroll: true });
      }
    };
  }, [enabled]);

  return restoreElementRef;
};
