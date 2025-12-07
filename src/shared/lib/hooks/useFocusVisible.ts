
import * as React from 'react';

interface UseFocusVisibleProps {
  /**
   * The ref to the element that should have focus visible styles applied.
   */
  ref: React.RefObject<HTMLElement>;
}

export const useFocusVisible = (props: UseFocusVisibleProps) => {
  const { ref } = props;
  const [isFocusVisible, setIsFocusVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) {
      return undefined;
    }

    const handleMouseDown = () => {
      setIsFocusVisible(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsFocusVisible(true);
      }
    };

    const handleBlur = () => {
      setIsFocusVisible(false);
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('keydown', handleKeyDown);
    element.addEventListener('blur', handleBlur);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('keydown', handleKeyDown);
      element.removeEventListener('blur', handleBlur);
    };
  }, [ref]);

  return isFocusVisible;
};
