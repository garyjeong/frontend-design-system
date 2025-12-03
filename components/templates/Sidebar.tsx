'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  onClose?: () => void;
  position?: 'left' | 'right';
  width?: string;
  collapsible?: boolean;
  children?: React.ReactNode;
}

interface StyledSidebarProps {
  $isOpen?: boolean;
  $position: 'left' | 'right';
  $width: string;
}

const Overlay = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StyledSidebar = styled.aside<StyledSidebarProps>`
  position: fixed;
  top: 0;
  ${({ $position }) => ($position === 'left' ? 'left: 0' : 'right: 0')};
  width: ${({ $width }) => $width};
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-right: ${({ theme, $position }) => ($position === 'left' ? `1px solid ${theme.colors.border}` : 'none')};
  border-left: ${({ theme, $position }) => ($position === 'right' ? `1px solid ${theme.colors.border}` : 'none')};
  box-shadow: ${({ $position }) => ($position === 'left' ? '2px 0 8px rgba(0, 0, 0, 0.1)' : '-2px 0 8px rgba(0, 0, 0, 0.1)')};
  z-index: 1000;
  overflow-y: auto;
  transform: ${({ $isOpen, $position }) => {
    if ($isOpen) return 'translateX(0)';
    return $position === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
  }};
  transition: transform 0.3s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: relative;
    transform: translateX(0);
    height: auto;
    box-shadow: none;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const SidebarContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Sidebar = ({
  isOpen = true,
  onClose,
  position = 'left',
  width = '280px',
  collapsible = false,
  children,
  ...props
}: SidebarProps) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
  };

  const isActuallyOpen = onClose !== undefined ? isOpen : internalOpen;

  return (
    <>
      {isActuallyOpen && (
        <Overlay $isOpen={isActuallyOpen} onClick={handleClose} aria-hidden="true" />
      )}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledSidebar $isOpen={isActuallyOpen} $position={position} $width={width} {...props}>
        {collapsible && (
          <SidebarHeader>
            <CloseButton onClick={handleClose} aria-label="Close sidebar">
              <FaTimes />
            </CloseButton>
          </SidebarHeader>
        )}
        <SidebarContent>{children}</SidebarContent>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
