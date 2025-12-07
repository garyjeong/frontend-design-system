import React, { useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { TextField, type TextFieldProps } from '@/shared/ui/atoms/input';

const formFieldVariants = cva(
  "flex flex-col w-full",
  {
    variants: {
      spacing: {
        none: "gap-0",
        sm: "gap-1.5",
        md: "gap-2",
        lg: "gap-3",
      },
    },
    defaultVariants: {
      spacing: "md",
    },
  }
);

export interface FormFieldProps
  extends Omit<TextFieldProps, 'label' | 'error' | 'helperText'> {
  label?: string;
  error?: string;
  helperText?: string;
  spacing?: VariantProps<typeof formFieldVariants>['spacing'];
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      spacing,
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = id || generatedId;
    const errorId = error ? `${fieldId}-error` : undefined;
    const helperId = helperText ? `${fieldId}-helper` : undefined;

    return (
      <div className={cn(formFieldVariants({ spacing }), className)}>
        <TextField
          ref={ref}
          id={fieldId}
          label={label}
          error={error}
          helperText={helperText}
          {...props}
        />
      </div>
    );
  },
);

FormField.displayName = 'FormField';

export default FormField;

