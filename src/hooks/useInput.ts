
import * as React from 'react';

interface UseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * If `true`, the input will be disabled.
   */
  disabled?: boolean;
  /**
   * If `true`, the input will be readOnly.
   */
  readOnly?: boolean;
  /**
   * If `true`, the input will be required.
   */
  required?: boolean;
  /**
   * The ref to the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * The value of the input.
   */
  value?: string;
  /**
   * The default value of the input.
   */
  defaultValue?: string;
  /**
   * Callback fired when the value is changed.
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

interface UseInputReturn {
  /**
   * Props to spread on the input element.
   */
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * Wether the input is disabled
   */
  disabled: boolean;
  /**
   * Wether the input is readOnly.
   */
  readOnly: boolean;
  /**
   * Wether the input is required.
   */
  required: boolean;
}

export const useInput = (props: UseInputProps): UseInputReturn => {
  const {
    disabled = false,
    readOnly = false,
    required = false,
    inputRef,
    value: valueProp,
    defaultValue,
    onChange,
    ...other
  } = props;

  const [value, setValue] = React.useState(defaultValue ?? valueProp ?? '');

  React.useEffect(() => {
    if (valueProp !== undefined) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) {
      event.preventDefault();
      return;
    }
    setValue(event.target.value);
    onChange?.(event);
  }, [disabled, readOnly, onChange]);

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...other,
    ref: inputRef,
    onChange: handleChange,
    disabled,
    readOnly,
    required,
    value,
    'aria-disabled': disabled,
    'aria-readonly': readOnly,
    'aria-required': required,
  };

  return {
    inputProps,
    disabled,
    readOnly,
    required,
  };
};
