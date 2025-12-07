import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';
import { vi } from 'vitest';

describe('Pagination', () => {
  it('renders pagination with page numbers', () => {
    render(
      <Pagination currentPage={1} totalPages={5} />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls onPageChange when page is clicked', () => {
    const handleChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />
    );
    const page2 = screen.getByText('2');
    fireEvent.click(page2);
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('highlights current page', () => {
    render(
      <Pagination currentPage={3} totalPages={5} />
    );
    const page3 = screen.getByText('3').closest('button');
    expect(page3).toHaveAttribute('aria-current', 'page');
    expect(page3).toHaveClass('border-primary', 'text-primary');
  });

  it('disables previous button on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );
    const prevButton = screen.getByLabelText(/previous page/i);
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} />
    );
    const nextButton = screen.getByLabelText(/next page/i);
    expect(nextButton).toBeDisabled();
  });

  it('shows first and last buttons when showFirstLast is true', () => {
    render(
      <Pagination currentPage={3} totalPages={5} showFirstLast />
    );
    expect(screen.getByLabelText(/first page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last page/i)).toBeInTheDocument();
  });

  it('renders ellipsis for large page counts', () => {
    render(
      <Pagination currentPage={5} totalPages={10} maxVisible={5} />
    );
    // There may be multiple ellipsis, so use getAllByText
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
  });

  it('does not render when totalPages is 1', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('handles hrefBuilder prop', () => {
    const hrefBuilder = (page: number) => `/page/${page}`;
    render(
      <Pagination currentPage={1} totalPages={5} hrefBuilder={hrefBuilder} />
    );
    const page2 = screen.getByText('2').closest('a');
    expect(page2).toHaveAttribute('href', '/page/2');
  });

  it('has proper aria attributes', () => {
    render(
      <Pagination currentPage={3} totalPages={5} />
    );
    const nav = screen.getByLabelText(/pagination/i);
    expect(nav).toBeInTheDocument();
    const page3 = screen.getByText('3').closest('button');
    expect(page3).toHaveAttribute('aria-current', 'page');
  });
});
