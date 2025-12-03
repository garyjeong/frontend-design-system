'use client';

import React from 'react';
import styled from 'styled-components';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  copyright?: string;
  links?: React.ReactNode;
  social?: React.ReactNode;
  variant?: 'default' | 'minimal';
}

interface StyledFooterProps {
  $variant?: string;
}

const StyledFooter = styled.footer<StyledFooterProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $variant }) => ($variant === 'minimal' ? 'transparent' : theme.colors.background.default)};
  border-top: ${({ theme, $variant }) => ($variant === 'minimal' ? 'none' : `1px solid ${theme.colors.border}`)};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

export const Footer = ({
  copyright,
  links,
  social,
  variant = 'default',
  children,
  ...props
}: FooterProps) => (
  <StyledFooter $variant={variant} {...props}>
    {(links || social || children) && (
      <FooterContent>
        {links && <FooterLinks>{links}</FooterLinks>}
        {social && <FooterSocial>{social}</FooterSocial>}
        {children}
      </FooterContent>
    )}
    {copyright && <Copyright>{copyright}</Copyright>}
  </StyledFooter>
);

export default Footer;

