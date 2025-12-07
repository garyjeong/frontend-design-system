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
     * The ref to the input element.
     */
    inputRef: React.Ref<HTMLInputElement> | undefined;
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
export declare const useInput: (props: UseInputProps) => UseInputReturn;
export {};
