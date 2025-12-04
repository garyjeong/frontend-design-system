'use client';

import React from 'react';
import styled from 'styled-components';

export interface ListItem {
  id: string;
  content: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ListProps {
  items: ListItem[];
  variant?: 'default' | 'bordered' | 'divided';
  dense?: boolean;
  maxHeight?: string;
  onItemClick?: (item: ListItem) => void;
}

interface StyledListProps {
  $variant: 'default' | 'bordered' | 'divided';
  $dense?: boolean;
  $maxHeight?: string;
}

const StyledList = styled.ul<StyledListProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'bordered':
        return `
          border: 1px solid ${theme.colors.border};
        `;
      case 'divided':
        return `
          border: 1px solid ${theme.colors.border};
        `;
      default:
        return '';
    }
  }}

  ${({ $maxHeight }) => $maxHeight && `
    max-height: ${$maxHeight};
    overflow-y: auto;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

const ListItemContainer = styled.li<{ $dense?: boolean; $disabled?: boolean; $clickable?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme, $dense }) => ($dense ? theme.spacing.sm : theme.spacing.md)} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: ${({ $clickable, $disabled }) => {
    if ($disabled) return 'not-allowed';
    if ($clickable) return 'pointer';
    return 'default';
  }};
  transition: background-color 0.2s ease;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  &:last-child {
    border-bottom: none;
  }

  ${({ $clickable, theme, $disabled }) => $clickable && !$disabled && `
    &:hover {
      background-color: ${theme.colors.background.default};
    }

    &:active {
      background-color: ${theme.colors.background.paper};
    }
  `}

  ${({ $disabled }) => $disabled && `
    pointer-events: none;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 32px;
    height: 32px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const List = ({
  items,
  variant = 'default',
  dense = false,
  maxHeight,
  onItemClick,
}: ListProps) => {
  const handleItemClick = (item: ListItem) => {
    if (item.disabled) return;

    if (item.onClick) {
      item.onClick();
    }

    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <StyledList $variant={variant} $dense={dense} $maxHeight={maxHeight} role="list">
      {items.map((item) => (
        <ListItemContainer
          key={item.id}
          $dense={dense}
          $disabled={item.disabled}
          $clickable={!!(item.onClick || onItemClick)}
          onClick={() => handleItemClick(item)}
          role="listitem"
          {...(item.disabled && { 'aria-disabled': true })}
        >
          {item.avatar && (
            <AvatarWrapper>
              {item.avatar}
            </AvatarWrapper>
          )}
          <ContentWrapper>
            {item.content}
          </ContentWrapper>
          {item.action && (
            <ActionWrapper>
              {item.action}
            </ActionWrapper>
          )}
        </ListItemContainer>
      ))}
    </StyledList>
  );
};

export default List;

