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
export declare const useButton: (props: UseButtonProps) => UseButtonReturn;
export {};
