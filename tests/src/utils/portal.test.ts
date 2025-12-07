
import { render, screen, cleanup } from '@testing-library/react';
import { Portal } from '../src/utils/portal';
import { describe, it, expect, afterEach } from 'vitest';
import React from 'react';

describe('Portal', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render children into a new div appended to body by default', () => {
    render(<Portal><div>Portal Content</div></Portal>);
    const portalContent = screen.getByText('Portal Content');
    expect(portalContent).toBeInTheDocument();
    expect(document.body).toContainElement(portalContent.parentElement);
    expect(portalContent.parentElement?.tagName).toBe('DIV');
    expect(portalContent.parentElement).not.toBe(document.body); // Should be a new div, not directly body
  });

  it('should render children into the specified container', () => {
    const customContainer = document.createElement('div');
    customContainer.id = 'custom-container';
    document.body.appendChild(customContainer);

    render(<Portal container={customContainer}><span>Custom Portal Content</span></Portal>);
    const portalContent = screen.getByText('Custom Portal Content');
    expect(portalContent).toBeInTheDocument();
    expect(customContainer).toContainElement(portalContent);
    expect(document.body).toContainElement(customContainer);

    document.body.removeChild(customContainer);
  });

  it('should unmount the created div when component unmounts', () => {
    const { unmount } = render(<Portal><div>Ephemeral Content</div></Portal>);
    const portalContent = screen.getByText('Ephemeral Content');
    const portalParent = portalContent.parentElement;

    expect(portalContent).toBeInTheDocument();
    expect(document.body).toContainElement(portalParent);

    unmount();

    expect(portalContent).not.toBeInTheDocument();
    expect(document.body).not.toContainElement(portalParent);
  });

  it('should not unmount a provided container when component unmounts', () => {
    const customContainer = document.createElement('div');
    customContainer.id = 'persistent-container';
    document.body.appendChild(customContainer);

    const { unmount } = render(<Portal container={customContainer}><div>Persistent Content</div></Portal>);
    const portalContent = screen.getByText('Persistent Content');

    expect(portalContent).toBeInTheDocument();
    expect(customContainer).toContainElement(portalContent);
    expect(document.body).toContainElement(customContainer);

    unmount();

    expect(portalContent).not.toBeInTheDocument();
    expect(document.body).toContainElement(customContainer);

    document.body.removeChild(customContainer);
  });
});
