'use client';

import React from 'react';
import styled from 'styled-components';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  sticky?: boolean;
  variant?: 'default' | 'transparent';
}

interface StyledHeaderProps {
  $sticky?: boolean;
  $variant?: string;
}

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $variant }) => ($variant === 'transparent' ? 'transparent' : theme.colors.background.paper)};
  border-bottom: ${({ theme, $variant }) => ($variant === 'transparent' ? 'none' : `1px solid ${theme.colors.border}`)};
  box-shadow: ${({ $variant }) => ($variant === 'transparent' ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.05)')};
  z-index: 100;

  ${({ $sticky }) => $sticky && `
    position: sticky;
    top: 0;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const NavigationSection = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const ActionsSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
  }
`;

export const Header = ({
  logo,
  navigation,
  actions,
  sticky = false,
  variant = 'default',
  children,
  ...props
}: HeaderProps) => (
  <StyledHeader $sticky={sticky} $variant={variant} {...props}>
    {logo && <LogoSection>{logo}</LogoSection>}
    {navigation && <NavigationSection>{navigation}</NavigationSection>}
    {actions && <ActionsSection>{actions}</ActionsSection>}
    {children}
  </StyledHeader>
);

export default Header;

