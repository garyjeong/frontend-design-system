'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface MenuProps {
  items: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
  activeItem?: string;
  onItemClick?: (href: string) => void;
}

interface StyledMenuProps {
  $orientation: 'horizontal' | 'vertical';
}

const StyledMenu = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: ${({ $orientation }) => ($orientation === 'vertical' ? 'column' : 'row')};
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const MenuItemLink = styled(Link)<{ $active?: boolean; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  color: ${({ theme, $active, $disabled }) => {
    if ($disabled) return theme.colors.text.disabled;
    if ($active) return theme.colors.primary;
    return theme.colors.text.primary;
  }};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  &:hover {
    background-color: ${({ theme, $disabled }) => ($disabled ? 'transparent' : theme.colors.background.paper)};
    color: ${({ theme, $active, $disabled }) => {
      if ($disabled) return theme.colors.text.disabled;
      if ($active) return theme.colors.primary;
      return theme.colors.primary;
    }};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $active, theme }) => $active && `
    background-color: ${theme.colors.background.paper};
    border-left: 3px solid ${theme.colors.primary};
  `}
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

export const Menu = ({
  items,
  orientation = 'horizontal',
  activeItem,
  onItemClick,
}: MenuProps) => {
  const handleClick = (href: string, disabled?: boolean) => {
    if (!disabled && onItemClick) {
      onItemClick(href);
    }
  };

  return (
    <StyledMenu $orientation={orientation} role="navigation" aria-label="Main navigation">
      {items.map((item) => {
        const isActive = activeItem === item.href;
        return (
          <MenuItemLink
            key={item.href}
            href={item.disabled ? '#' : item.href}
            $active={isActive}
            $disabled={item.disabled}
            onClick={() => handleClick(item.href, item.disabled)}
            aria-current={isActive ? 'page' : undefined}
            aria-disabled={item.disabled}
          >
            {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
            <span>{item.label}</span>
          </MenuItemLink>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;

