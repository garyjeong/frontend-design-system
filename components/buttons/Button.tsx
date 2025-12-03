'use client';

import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

export type ButtonVariant = 'primary' | 'secondary' | 'icon';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  disabled?: boolean;
  'aria-label'?: string;
}

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $disabled?: boolean;
  $iconOnly?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  outline: none;
  position: relative;
  overflow: hidden;

  /* Size variants */
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.sm};
          font-size: ${theme.typography.fontSize.sm};
          min-height: 32px;
        `;
      case 'large':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.typography.fontSize.lg};
          min-height: 48px;
        `;
      default: // medium
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.typography.fontSize.base};
          min-height: 40px;
        `;
    }
  }}

  /* Icon-only button */
  ${({ $iconOnly, $size, theme }) => {
    if ($iconOnly) {
      const sizeMap = {
        small: theme.spacing.md,
        medium: '40px',
        large: theme.spacing.xl,
      };
      return `
        padding: 0;
        width: ${sizeMap[$size]};
        height: ${sizeMap[$size]};
        border-radius: ${theme.borderRadius.full};
      `;
    }
    return '';
  }}

  /* Variant styles */
  ${({ $variant, theme, $disabled }) => {
    if ($disabled) {
      return `
        background-color: ${theme.colors.background.paper};
        color: ${theme.colors.text.disabled};
        border: 1px solid ${theme.colors.border};
        opacity: 0.6;
      `;
    }

    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: ${theme.mode === 'light' ? '#1565c0' : '#64b5f6'};
            border-color: ${theme.mode === 'light' ? '#1565c0' : '#64b5f6'};
          }

          &:active {
            background-color: ${theme.mode === 'light' ? '#0d47a1' : '#90caf9'};
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid ${theme.colors.primary};
            outline-offset: 2px;
          }
        `;
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};

          &:hover {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.text.primary};
          }

          &:active {
            background-color: ${theme.mode === 'light' ? '#1565c0' : '#64b5f6'};
            transform: scale(0.98);
          }

          &:focus-visible {
            outline: 2px solid ${theme.colors.primary};
            outline-offset: 2px;
          }
        `;
      case 'icon':
        return `
          background-color: ${theme.colors.background.paper};
          color: ${theme.colors.text.primary};
          border: 1px solid ${theme.colors.border};

          &:hover {
            background-color: ${theme.colors.background.default};
            border-color: ${theme.colors.primary};
          }

          &:active {
            background-color: ${theme.colors.background.paper};
            transform: scale(0.95);
          }

          &:focus-visible {
            outline: 2px solid ${theme.colors.primary};
            outline-offset: 2px;
          }
        `;
      default:
        return '';
    }
  }}
`;

const IconWrapper = styled.span<{ $position: 'left' | 'right' }>`
  display: inline-flex;
  align-items: center;
  ${({ $position }) => ($position === 'right' ? 'order: 2;' : '')}
`;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  children,
  disabled = false,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  const iconOnly = !children && !!Icon;
  const buttonAriaLabel = ariaLabel || (iconOnly ? 'Icon button' : undefined);

  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $disabled={disabled}
      $iconOnly={iconOnly}
      disabled={disabled}
      aria-label={buttonAriaLabel}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <IconWrapper $position="left">
          <Icon />
        </IconWrapper>
      )}
      {children && <span>{children}</span>}
      {Icon && iconPosition === 'right' && (
        <IconWrapper $position="right">
          <Icon />
        </IconWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
