
import * as React from 'react';

interface UseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the button will be in a loading state.
   */
  loading?: boolean;
  /**
   * The ref to the button element.
   */
  buttonRef?: React.Ref<HTMLButtonElement>;
}

interface UseButtonReturn {
  /**
   * Props to spread on the button element.
   */
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  /**
   * The ref to the button element.
   */
  buttonRef: React.Ref<HTMLButtonElement> | undefined;
  /**
   * Wether the button is disabled
   */
  disabled: boolean;
  /**
   * Wether the button is in a loading state.
   */
  loading: boolean;
}

export const useButton = (props: UseButtonProps): UseButtonReturn => {
  const { disabled = false, loading = false, buttonRef, onClick, ...other } = props;

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  }, [disabled, loading, onClick]);

  const buttonProps = {
    ...other,
    onClick: handleClick,
    disabled: disabled || loading,
    'aria-disabled': disabled || loading,
  } as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return {
    buttonProps,
    buttonRef,
    disabled: disabled || loading,
    loading,
  };
};
