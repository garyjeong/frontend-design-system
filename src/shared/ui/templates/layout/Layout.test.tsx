import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { Layout } from './Layout';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import '@testing-library/jest-dom';


describe('Layout', () => {
  it('renders layout with children', () => {
    render(<Layout><div>Content</div></Layout>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders layout with header and footer', () => {
    render(
      <Layout 
        header={<Header logo={<span>Logo</span>} />}
        footer={<Footer copyright="© 2024" />}
      >
        <div>Content</div>
      </Layout>,
    );
    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('© 2024')).toBeInTheDocument();
  });

  it('renders layout with sidebar on left', () => {
    render(
      <Layout sidebar={<Sidebar>Sidebar Content</Sidebar>} sidebarPosition="left">
        <div>Main Content</div>
      </Layout>,
    );
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('renders layout with sidebar on right', () => {
    render(
      <Layout sidebar={<Sidebar>Sidebar Content</Sidebar>} sidebarPosition="right">
        <div>Main Content</div>
      </Layout>,
    );
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument();
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('applies fullHeight prop', () => {
    const { container } = render(<Layout fullHeight><div>Content</div></Layout>);
    const layoutDiv = container.firstChild;
    expect(layoutDiv).toHaveClass('min-h-screen');
  });
});

describe('Header', () => {
  it('renders header with logo, navigation, and actions', () => {
    render(
        <Header 
            logo={<span>Logo</span>} 
            nav={<nav>Navigation</nav>}
            actions={<button type="button">Action</button>}
        />
    );
    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('applies sticky prop', () => {
    const { container } = render(<Header sticky />);
    expect(container.querySelector('header')).toHaveClass('sticky');
  });

  it('applies transparent variant', () => {
    const { container } = render(<Header variant="transparent" />);
    const headerEl = container.querySelector('header');
    expect(headerEl).toHaveClass('bg-transparent');
    expect(headerEl).not.toHaveClass('shadow-sm');
  });
});

describe('Footer', () => {
    it('renders footer with copyright, links, and social', () => {
        render(
            <Footer 
                copyright="© 2024"
                links={[{label: 'About', href: '/about'}]}
            />
        );
        expect(screen.getByText('© 2024')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
      });

  it('applies minimal variant', () => {
    const { container } = render(<Footer variant="minimal" />);
    const footer = container.querySelector('footer');
    expect(footer).not.toHaveClass('border-t');
  });
});

describe('Sidebar', () => {
  it('renders sidebar with content and handles position', () => {
    const { rerender, container} = render(<Sidebar position="left">Content</Sidebar>);
    const sidebarLeft = container.querySelector('aside');
    expect(sidebarLeft).toHaveClass('left-0');

    rerender(<Sidebar position="right">Content</Sidebar>);
    const sidebarRight = container.querySelector('aside');
    expect(sidebarRight).toHaveClass('right-0');
  });

  it('handles close when collapsible and open', () => {
    const handleClose = vi.fn();
    render(
        <Sidebar isOpen collapsible onClose={handleClose}>
          Content
        </Sidebar>,
    );
    const closeButton = screen.getByLabelText(/close sidebar/i);
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  it('applies custom width', () => {
    const { container } = render(<Sidebar isOpen items={[]} width="320px">Content</Sidebar>);
    const sidebar = container.querySelector('aside');
    expect(sidebar).toHaveStyle('width: 320px');
  });

  it('is not rendered when isOpen is false', () => {
    render(<Sidebar isOpen={false} items={[]}>Content</Sidebar>);
    const sidebar = screen.queryByRole('navigation');
    expect(sidebar).not.toBeInTheDocument();
  });
});
