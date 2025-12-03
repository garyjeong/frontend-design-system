'use client';

import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

interface StyledCheckboxProps {
  $error?: boolean;
  $checked?: boolean;
  $disabled?: boolean;
}

const FieldContainer = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  border: 2px solid ${({ theme, $error, $checked }) => {
    if ($error) return theme.colors.error;
    if ($checked) return theme.colors.primary;
    return theme.colors.border;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: ${({ theme, $checked }) => ($checked ? theme.colors.primary : theme.colors.background.paper)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;

  &:hover {
    border-color: ${({ theme, $error, $disabled }) => {
      if ($disabled) return theme.colors.border;
      if ($error) return theme.colors.error;
      return theme.colors.primary;
    }};
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme, $error }) => ($error ? `${theme.colors.error}33` : `${theme.colors.primary}33`)};
  }

  &::after {
    content: '';
    position: absolute;
    display: ${({ $checked }) => ($checked ? 'block' : 'none')};
    width: 5px;
    height: 10px;
    border: solid ${({ theme }) => theme.colors.text.primary};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-top: -2px;
  }

  ${({ $disabled }) => $disabled && `
    opacity: 0.6;
  `}
`;

const Label = styled.label<{ $disabled?: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.text.disabled : theme.colors.text.primary)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  flex: 1;
`;

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => `calc(20px + ${theme.spacing.sm})`};
  display: block;
`;

const HelperText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => `calc(20px + ${theme.spacing.sm})`};
  display: block;
`;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      checked,
      disabled,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      onChange,
      ...props
    },
    ref,
  ) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${checkboxId}-error` : undefined;
    const helperId = helperText ? `${checkboxId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!disabled && onChange) {
          const input = document.getElementById(checkboxId) as HTMLInputElement;
          if (input) {
            const syntheticEvent = {
              target: { ...input, checked: !checked },
              currentTarget: { ...input, checked: !checked },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            onChange(syntheticEvent);
          }
        }
      }
    };

    return (
      <FieldContainer $fullWidth={fullWidth}>
        <CheckboxWrapper>
          <StyledCheckbox
            $error={!!error}
            $checked={!!checked}
            $disabled={!!disabled}
            onClick={() => {
              if (!disabled && onChange) {
                const input = document.getElementById(checkboxId) as HTMLInputElement;
                if (input) {
                  const syntheticEvent = {
                    target: { ...input, checked: !checked },
                    currentTarget: { ...input, checked: !checked },
                  } as unknown as React.ChangeEvent<HTMLInputElement>;
                  onChange(syntheticEvent);
                }
              }
            }}
            onKeyDown={handleKeyDown}
            role="checkbox"
            aria-checked={checked}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
          >
            <HiddenInput
              ref={ref}
              type="checkbox"
              id={checkboxId}
              checked={checked}
              disabled={disabled}
              aria-label={ariaLabel || label}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={describedBy}
              onChange={onChange}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
            />
          </StyledCheckbox>
          {label && (
            <Label htmlFor={checkboxId} $disabled={disabled}>
              {label}
            </Label>
          )}
        </CheckboxWrapper>
        {error && errorId && <ErrorText id={errorId} role="alert">{error}</ErrorText>}
        {helperText && !error && helperId && <HelperText id={helperId}>{helperText}</HelperText>}
      </FieldContainer>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
