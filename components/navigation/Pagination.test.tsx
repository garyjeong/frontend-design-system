import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Pagination } from './Pagination';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Pagination', () => {
  it('renders pagination with page numbers', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={1} totalPages={5} />
      </TestWrapper>,
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls onPageChange when page is clicked', () => {
    const handleChange = jest.fn();
    render(
      <TestWrapper>
        <Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />
      </TestWrapper>,
    );
    const page2 = screen.getByText('2');
    fireEvent.click(page2);
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it('highlights current page', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={3} totalPages={5} />
      </TestWrapper>,
    );
    const page3 = screen.getByText('3').closest('button');
    expect(page3).toHaveAttribute('aria-current', 'page');
  });

  it('disables previous button on first page', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={1} totalPages={5} />
      </TestWrapper>,
    );
    const prevButton = screen.getByLabelText(/previous page/i);
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={5} totalPages={5} />
      </TestWrapper>,
    );
    const nextButton = screen.getByLabelText(/next page/i);
    expect(nextButton).toBeDisabled();
  });

  it('shows first and last buttons when showFirstLast is true', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={3} totalPages={5} showFirstLast />
      </TestWrapper>,
    );
    expect(screen.getByLabelText(/first page/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last page/i)).toBeInTheDocument();
  });

  it('renders ellipsis for large page counts', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={5} totalPages={10} maxVisible={5} />
      </TestWrapper>,
    );
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('does not render when totalPages is 1', () => {
    const { container } = render(
      <TestWrapper>
        <Pagination currentPage={1} totalPages={1} />
      </TestWrapper>,
    );
    expect(container.querySelector('nav')).not.toBeInTheDocument();
  });

  it('handles hrefBuilder prop', () => {
    const hrefBuilder = (page: number) => `/page/${page}`;
    render(
      <TestWrapper>
        <Pagination currentPage={1} totalPages={5} hrefBuilder={hrefBuilder} />
      </TestWrapper>,
    );
    const page2 = screen.getByText('2').closest('a');
    expect(page2).toHaveAttribute('href', '/page/2');
  });

  it('has proper aria attributes', () => {
    render(
      <TestWrapper>
        <Pagination currentPage={3} totalPages={5} />
      </TestWrapper>,
    );
    const nav = screen.getByLabelText(/pagination/i);
    expect(nav).toBeInTheDocument();
    const page3 = screen.getByText('3').closest('button');
    expect(page3).toHaveAttribute('aria-current', 'page');
  });
});

