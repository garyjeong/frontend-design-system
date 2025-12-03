'use client';

import React from 'react';
import styled from 'styled-components';

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sidebar?: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: string;
  children?: React.ReactNode;
  maxWidth?: string;
  fullHeight?: boolean;
}

interface StyledLayoutProps {
  $maxWidth?: string;
  $fullHeight?: boolean;
}

const LayoutContainer = styled.div<StyledLayoutProps>`
  display: flex;
  flex-direction: column;
  min-height: ${({ $fullHeight }) => ($fullHeight ? '100vh' : 'auto')};
  width: 100%;
`;

const LayoutContent = styled.div<{ $maxWidth?: string }>`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg};
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const SidebarWrapper = styled.aside`
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const Layout = ({
  header,
  footer,
  sidebar,
  sidebarPosition = 'left',
  sidebarWidth = '280px',
  children,
  maxWidth,
  fullHeight = false,
  ...props
}: LayoutProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LayoutContainer $fullHeight={fullHeight} {...props}>
    {header}
    <LayoutContent $maxWidth={maxWidth}>
      {sidebar && sidebarPosition === 'left' && (
        <SidebarWrapper>
          {React.isValidElement(sidebar)
            ? React.cloneElement(sidebar as React.ReactElement<any>, {
              position: 'left',
              width: sidebarWidth,
            })
            : sidebar}
        </SidebarWrapper>
      )}
      <MainContent>{children}</MainContent>
      {sidebar && sidebarPosition === 'right' && (
        <SidebarWrapper>
          {React.isValidElement(sidebar)
            ? React.cloneElement(sidebar as React.ReactElement<any>, {
              position: 'right',
              width: sidebarWidth,
            })
            : sidebar}
        </SidebarWrapper>
      )}
    </LayoutContent>
    {footer}
  </LayoutContainer>
);

export default Layout;
