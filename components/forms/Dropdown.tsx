'use client';

import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: DropdownOption[];
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  required?: boolean;
  placeholder?: string;
}

interface StyledDropdownProps {
  $error?: boolean;
  $fullWidth?: boolean;
}

const FieldContainer = styled.div<StyledDropdownProps>`
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

const StyledSelect = styled.select<StyledDropdownProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme }) => theme.spacing.md} center;
  padding-right: ${({ theme }) => `calc(${theme.spacing.xl} + ${theme.spacing.md})`};

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

  option {
    background-color: ${({ theme }) => theme.colors.background.paper};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  option:disabled {
    color: ${({ theme }) => theme.colors.text.disabled};
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

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      fullWidth = false,
      required = false,
      placeholder,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const selectId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${selectId}-error` : undefined;
    const helperId = helperText ? `${selectId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    return (
      <FieldContainer $fullWidth={fullWidth}>
        {label && (
          <Label htmlFor={selectId}>
            {label}
            {required && <RequiredIndicator aria-label="required">*</RequiredIndicator>}
          </Label>
        )}
        <StyledSelect
          ref={ref}
          id={selectId}
          $error={!!error}
          aria-label={ariaLabel || label}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          aria-required={required}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        {error && errorId && <ErrorText id={errorId} role="alert">{error}</ErrorText>}
        {helperText && !error && helperId && <HelperText id={helperId}>{helperText}</HelperText>}
      </FieldContainer>
    );
  },
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
