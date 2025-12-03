'use client';

import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
}

interface StyledTextFieldProps {
  $error?: boolean;
  $fullWidth?: boolean;
}

const FieldContainer = styled.div<StyledTextFieldProps>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

const RequiredIndicator = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.spacing.xs};
`;

const StyledInput = styled.input<StyledTextFieldProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.primary)};
    box-shadow: 0 0 0 2px ${({ theme, $error }) => ($error ? `${theme.colors.error}33` : `${theme.colors.primary}33`)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
    opacity: 0.6;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
`;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      required = false,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `textfield-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    return (
      <FieldContainer $fullWidth={fullWidth}>
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {required && <RequiredIndicator aria-label="required">*</RequiredIndicator>}
          </Label>
        )}
        <StyledInput
          ref={ref}
          id={inputId}
          $error={!!error}
          aria-label={ariaLabel || label}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          aria-required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
        {error && errorId && <ErrorText id={errorId} role="alert">{error}</ErrorText>}
        {helperText && !error && helperId && <HelperText id={helperId}>{helperText}</HelperText>}
      </FieldContainer>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
