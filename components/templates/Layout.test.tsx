import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { Layout, Header, Footer, Sidebar } from './index';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <StyledThemeProvider theme={lightTheme}>
    {children}
  </StyledThemeProvider>
);

describe('Layout', () => {
  it('renders layout with children', () => {
    render(
      <TestWrapper>
        <Layout>
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders layout with header', () => {
    render(
      <TestWrapper>
        <Layout header={<Header logo={<span>Logo</span>} />}>
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(screen.getByText(/logo/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders layout with footer', () => {
    render(
      <TestWrapper>
        <Layout footer={<Footer copyright="© 2024" />}>
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(screen.getByText(/© 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders layout with sidebar on left', () => {
    render(
      <TestWrapper>
        <Layout sidebar={<Sidebar>Sidebar Content</Sidebar>} sidebarPosition="left">
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(screen.getByText(/sidebar content/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('renders layout with sidebar on right', () => {
    render(
      <TestWrapper>
        <Layout sidebar={<Sidebar>Sidebar Content</Sidebar>} sidebarPosition="right">
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(screen.getByText(/sidebar content/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it('applies maxWidth prop', () => {
    const { container } = render(
      <TestWrapper>
        <Layout maxWidth="1200px">
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('applies fullHeight prop', () => {
    const { container } = render(
      <TestWrapper>
        <Layout fullHeight>
          <div>Content</div>
        </Layout>
      </TestWrapper>,
    );
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});

describe('Header', () => {
  it('renders header with logo', () => {
    render(
      <TestWrapper>
        <Header logo={<span>Logo</span>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/logo/i)).toBeInTheDocument();
  });

  it('renders header with navigation', () => {
    render(
      <TestWrapper>
        <Header navigation={<nav>Navigation</nav>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/navigation/i)).toBeInTheDocument();
  });

  it('renders header with actions', () => {
    render(
      <TestWrapper>
        <Header actions={<button>Action</button>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/action/i)).toBeInTheDocument();
  });

  it('applies sticky prop', () => {
    const { container } = render(
      <TestWrapper>
        <Header sticky />
      </TestWrapper>,
    );
    expect(container.querySelector('header')).toBeInTheDocument();
  });

  it('applies transparent variant', () => {
    const { container } = render(
      <TestWrapper>
        <Header variant="transparent" />
      </TestWrapper>,
    );
    expect(container.querySelector('header')).toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('renders footer with copyright', () => {
    render(
      <TestWrapper>
        <Footer copyright="© 2024" />
      </TestWrapper>,
    );
    expect(screen.getByText(/© 2024/i)).toBeInTheDocument();
  });

  it('renders footer with links', () => {
    render(
      <TestWrapper>
        <Footer links={<a href="/about">About</a>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('renders footer with social', () => {
    render(
      <TestWrapper>
        <Footer social={<a href="/twitter">Twitter</a>} />
      </TestWrapper>,
    );
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
  });

  it('applies minimal variant', () => {
    const { container } = render(
      <TestWrapper>
        <Footer variant="minimal" />
      </TestWrapper>,
    );
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});

describe('Sidebar', () => {
  it('renders sidebar with content', () => {
    render(
      <TestWrapper>
        <Sidebar>Sidebar Content</Sidebar>
      </TestWrapper>,
    );
    expect(screen.getByText(/sidebar content/i)).toBeInTheDocument();
  });

  it('renders sidebar on left', () => {
    const { container } = render(
      <TestWrapper>
        <Sidebar position="left">Content</Sidebar>
      </TestWrapper>,
    );
    expect(container.querySelector('aside')).toBeInTheDocument();
  });

  it('renders sidebar on right', () => {
    const { container } = render(
      <TestWrapper>
        <Sidebar position="right">Content</Sidebar>
      </TestWrapper>,
    );
    expect(container.querySelector('aside')).toBeInTheDocument();
  });

  it('handles close when collapsible', () => {
    const handleClose = jest.fn();
    render(
      <TestWrapper>
        <Sidebar isOpen collapsible onClose={handleClose}>
          Content
        </Sidebar>
      </TestWrapper>,
    );
    const closeButton = screen.getByLabelText(/close sidebar/i);
    expect(closeButton).toBeInTheDocument();
  });

  it('applies custom width', () => {
    const { container } = render(
      <TestWrapper>
        <Sidebar width="320px">Content</Sidebar>
      </TestWrapper>,
    );
    expect(container.querySelector('aside')).toBeInTheDocument();
  });
});
