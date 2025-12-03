'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  hrefBuilder?: (page: number) => string;
  showFirstLast?: boolean;
  maxVisible?: number;
}

interface StyledPaginationProps {
  $disabled?: boolean;
  $active?: boolean;
}

const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const PaginationButton = styled.button<StyledPaginationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  color: ${({ theme, $active, $disabled }) => {
    if ($disabled) return theme.colors.text.disabled;
    if ($active) return theme.colors.text.primary;
    return theme.colors.text.secondary;
  }};
  background-color: ${({ theme, $active }) => ($active ? theme.colors.background.paper : 'transparent')};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return 'transparent';
      if ($active) return theme.colors.background.paper;
      return theme.colors.background.paper;
    }};
    border-color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return theme.colors.border;
      if ($active) return theme.colors.primary;
      return theme.colors.primary;
    }};
    color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return theme.colors.text.disabled;
      if ($active) return theme.colors.primary;
      return theme.colors.primary;
    }};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $disabled }) => $disabled && `
    opacity: 0.6;
    pointer-events: none;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 36px;
    height: 36px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const PaginationLink = styled(Link)<StyledPaginationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme, $active }) => ($active ? theme.typography.fontWeight.medium : theme.typography.fontWeight.normal)};
  color: ${({ theme, $active, $disabled }) => {
    if ($disabled) return theme.colors.text.disabled;
    if ($active) return theme.colors.text.primary;
    return theme.colors.text.secondary;
  }};
  background-color: ${({ theme, $active }) => ($active ? theme.colors.background.paper : 'transparent')};
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return 'transparent';
      if ($active) return theme.colors.background.paper;
      return theme.colors.background.paper;
    }};
    border-color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return theme.colors.border;
      if ($active) return theme.colors.primary;
      return theme.colors.primary;
    }};
    color: ${({ theme, $disabled, $active }) => {
      if ($disabled) return theme.colors.text.disabled;
      if ($active) return theme.colors.primary;
      return theme.colors.primary;
    }};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({ $disabled }) => $disabled && `
    opacity: 0.6;
    pointer-events: none;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 36px;
    height: 36px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  hrefBuilder,
  showFirstLast = false,
  maxVisible = 5,
}: PaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    const halfVisible = Math.floor(maxVisible / 2);

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= halfVisible + 1) {
      for (let i = 1; i <= maxVisible - 1; i += 1) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - halfVisible) {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - maxVisible + 2; i <= totalPages; i += 1) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('ellipsis');
      for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
        pages.push(i);
      }
      pages.push('ellipsis');
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    if (onPageChange && page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer aria-label="Pagination">
      {showFirstLast && (
        <>
          {hrefBuilder ? (
            <PaginationLink
              href={hrefBuilder(1)}
              $disabled={currentPage === 1}
              aria-label="First page"
            >
              <FaChevronLeft />
              <FaChevronLeft style={{ marginLeft: '-4px' }} />
            </PaginationLink>
          ) : (
            <PaginationButton
              type="button"
              $disabled={currentPage === 1}
              onClick={() => handlePageChange(1)}
              aria-label="First page"
            >
              <FaChevronLeft />
              <FaChevronLeft style={{ marginLeft: '-4px' }} />
            </PaginationButton>
          )}
        </>
      )}

      {hrefBuilder ? (
        <PaginationLink
          href={hrefBuilder(Math.max(1, currentPage - 1))}
          $disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </PaginationLink>
      ) : (
        <PaginationButton
          type="button"
          $disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </PaginationButton>
      )}

      {pageNumbers.map((page, index) => {
        if (page === 'ellipsis') {
          return <Ellipsis key={`ellipsis-${index}`}>...</Ellipsis>;
        }

        const isActive = page === currentPage;

        if (hrefBuilder) {
          return (
            <PaginationLink
              key={page}
              href={hrefBuilder(page)}
              $active={isActive}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </PaginationLink>
          );
        }

        return (
          <PaginationButton
            key={page}
            type="button"
            $active={isActive}
            onClick={() => handlePageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {page}
          </PaginationButton>
        );
      })}

      {hrefBuilder ? (
        <PaginationLink
          href={hrefBuilder(Math.min(totalPages, currentPage + 1))}
          $disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <FaChevronRight />
        </PaginationLink>
      ) : (
        <PaginationButton
          type="button"
          $disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <FaChevronRight />
        </PaginationButton>
      )}

      {showFirstLast && (
        <>
          {hrefBuilder ? (
            <PaginationLink
              href={hrefBuilder(totalPages)}
              $disabled={currentPage === totalPages}
              aria-label="Last page"
            >
              <FaChevronRight />
              <FaChevronRight style={{ marginLeft: '-4px' }} />
            </PaginationLink>
          ) : (
            <PaginationButton
              type="button"
              $disabled={currentPage === totalPages}
              onClick={() => handlePageChange(totalPages)}
              aria-label="Last page"
            >
              <FaChevronRight />
              <FaChevronRight style={{ marginLeft: '-4px' }} />
            </PaginationButton>
          )}
        </>
      )}
    </PaginationContainer>
  );
};

export default Pagination;

