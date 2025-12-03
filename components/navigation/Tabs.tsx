'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

export interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  content?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  variant?: 'default' | 'pills';
  fullWidth?: boolean;
}

interface StyledTabsProps {
  $fullWidth?: boolean;
}

const TabsContainer = styled.div<StyledTabsProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TabsList = styled.div<StyledTabsProps>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;
  width: 100%;

  ${({ $fullWidth }) => $fullWidth && `
    & > * {
      flex: 1;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;

const TabButton = styled.button<{ $active?: boolean; $disabled?: boolean; $variant?: string; $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  color: ${({ theme, $active, $disabled }) => {
  if ($disabled) return theme.colors.text.disabled;
  if ($active) return theme.colors.primary;
  return theme.colors.text.secondary;
}};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  border-radius: ${({ theme, $variant }) => ($variant === 'pills' ? theme.borderRadius.full : '0')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  min-width: ${({ $fullWidth }) => ($fullWidth ? '0' : 'auto')};

  ${({ $variant, theme, $active }) => $variant === 'pills' && $active && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text.primary};
    border-bottom-color: transparent;
  `}

  ${({
    $variant, theme, $active, $disabled,
  }) => $variant === 'pills' && !$active && !$disabled && `
    &:hover {
      background-color: ${theme.colors.background.paper};
    }
  `}

  ${({ $variant, theme, $active }) => $variant === 'default' && !$active && `
    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.background.paper};
    }
  `}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $disabled }) => $disabled && `
    opacity: 0.6;
    pointer-events: none;
  `}
`;

const TabContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} 0;
  width: 100%;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

export const Tabs = ({
  items,
  defaultValue,
  value: controlledValue,
  onChange,
  variant = 'default',
  fullWidth = false,
}: TabsProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || items[0]?.value || '');

  const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleTabChange = (tabValue: string, disabled?: boolean) => {
    if (disabled) return;

    if (controlledValue === undefined) {
      setInternalValue(tabValue);
    }

    if (onChange) {
      onChange(tabValue);
    }
  };

  const activeTab = items.find((item) => item.value === currentValue);

  return (
    <TabsContainer $fullWidth={fullWidth}>
      <TabsList $fullWidth={fullWidth} role="tablist" aria-label="Tabs">
        {items.map((item) => {
          const isActive = currentValue === item.value;
          return (
            <TabButton
              key={item.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${item.value}`}
              id={`tab-${item.value}`}
              $active={isActive}
              $disabled={item.disabled}
              $variant={variant}
              $fullWidth={fullWidth}
              onClick={() => handleTabChange(item.value, item.disabled)}
              tabIndex={(() => {
                if (item.disabled) return -1;
                if (isActive) return 0;
                return -1;
              })()}
            >
              {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
              <span>{item.label}</span>
            </TabButton>
          );
        })}
      </TabsList>
      {activeTab && activeTab.content && (
        <TabContent
          id={`tabpanel-${activeTab.value}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.value}`}
        >
          {activeTab.content}
        </TabContent>
      )}
    </TabsContainer>
  );
};

export default Tabs;
