import React, { createContext, useContext, useId } from 'react';
import { cn } from '@/shared/lib/utils/cn';

interface FormControlContextValue {
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormControlContext = createContext<FormControlContextValue | undefined>(undefined);

const useFormControl = () => {
  const context = useContext(FormControlContext);
  return context;
};

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    {
      className,
      error,
      helperText,
      required,
      disabled,
      children,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id || generatedId;
    const errorId = error ? `${controlId}-error` : undefined;
    const helperId = helperText ? `${controlId}-helper` : undefined;

    const contextValue: FormControlContextValue = {
      id: controlId,
      error,
      helperText,
      required,
      disabled,
    };

    return (
      <FormControlContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn("flex flex-col w-full", className)}
          {...props}
        >
          {children}
          {error && (
            <span id={errorId} role="alert" className="text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </span>
          )}
          {helperText && !error && (
            <span id={helperId} className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block">
              {helperText}
            </span>
          )}
        </div>
      </FormControlContext.Provider>
    );
  },
);

FormControl.displayName = 'FormControl';

export { useFormControl };
export default FormControl;

