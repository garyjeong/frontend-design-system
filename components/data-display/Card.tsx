'use client';

import React from 'react';
import styled from 'styled-components';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  hoverable?: boolean;
}

interface StyledCardProps {
  $variant: 'default' | 'outlined' | 'elevated';
  $hoverable?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all 0.3s ease;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outlined':
        return `
          border: 1px solid ${theme.colors.border};
        `;
      case 'elevated':
        return `
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        `;
      default:
        return `
          border: 1px solid ${theme.colors.border};
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        `;
    }
  }}

  ${({ $hoverable, theme }) => $hoverable && `
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
`;

const CardSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Card = ({
  title,
  subtitle,
  image,
  imageAlt,
  actions,
  children,
  variant = 'default',
  hoverable = false,
  ...props
}: CardProps) => (
  <StyledCard $variant={variant} $hoverable={hoverable} {...props}>
    {image && <CardImage src={image} alt={imageAlt || title || 'Card image'} />}
    {(title || subtitle) && (
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      </CardHeader>
    )}
    {children && <CardContent>{children}</CardContent>}
    {actions && <CardActions>{actions}</CardActions>}
  </StyledCard>
);

export default Card;

