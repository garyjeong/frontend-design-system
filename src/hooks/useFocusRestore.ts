
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

export const useFocusRestore = (props: UseFocusRestoreProps) => {
  const { enabled = true, restoreElementRef } = props;

  const lastFocusedElementRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement;

    return () => {
      const restoreElement = restoreElementRef?.current || lastFocusedElementRef.current;
      if (restoreElement && typeof restoreElement.focus === 'function') {
        restoreElement.focus();
      }
    };
  }, [enabled, restoreElementRef]);
};
