
import { renderHook, act, fireEvent } from '@testing-library/react';
import { usePopover } from '../../../src/hooks/usePopover';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';

describe('usePopover', () => {
  let triggerElement: HTMLButtonElement;
  let popoverElement: HTMLDivElement;

  beforeEach(() => {
    triggerElement = document.createElement('button');
    document.body.appendChild(triggerElement);
    popoverElement = document.createElement('div');
    document.body.appendChild(popoverElement);

    // Mock useFocusTrap to prevent actual focus management interference in unit tests
    vi.mock('../../../../src/hooks/useFocusTrap', () => ({
      useFocusTrap: vi.fn(),
    }));
  });

  afterEach(() => {
    document.body.removeChild(triggerElement);
    document.body.removeChild(popoverElement);
    vi.restoreAllMocks();
  });

  it('should return initial state correctly', () => {
    const { result } = renderHook(() => usePopover({ content: 'Test content' }));
    expect(result.current.isOpen).toBe(false);
    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.popoverProps).toBeDefined();
    expect(result.current.popoverProps.role).toBe('dialog');
    expect(result.current.popoverProps.tabIndex).toBe(-1);
    expect(result.current.contentId).toMatch(/^popover-/);
  });

  it('should open popover on click trigger and close on subsequent click', () => {
    const { result } = renderHook(() => usePopover({ content: 'Test content', trigger: 'click' }));

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should open popover on hover trigger and close on mouse leave', () => {
    const { result } = renderHook(() => usePopover({ content: 'Test content', trigger: 'hover' }));

    act(() => {
      result.current.triggerProps.onMouseEnter?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.triggerProps.onMouseLeave?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should close popover when clicking outside (click trigger)', () => {
    const { result } = renderHook(() => usePopover({ content: 'Test content', trigger: 'click' }));

    // Set refs to actual DOM elements
    if (result.current.triggerProps.ref) {
      if (typeof result.current.triggerProps.ref === 'function') {
        result.current.triggerProps.ref(triggerElement);
      } else {
        (result.current.triggerProps.ref as React.MutableRefObject<HTMLElement | null>).current = triggerElement;
      }
    }
    if (result.current.popoverProps.ref) {
      if (typeof result.current.popoverProps.ref === 'function') {
        result.current.popoverProps.ref(popoverElement);
      } else {
        (result.current.popoverProps.ref as React.MutableRefObject<HTMLDivElement | null>).current = popoverElement;
      }
    }

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      fireEvent.mouseDown(document.body); // Simulate click outside
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should not close popover when clicking inside trigger or popover content', () => {
    const { result } = renderHook(() => usePopover({ content: 'Test content', trigger: 'click' }));

    // Set refs to actual DOM elements
    if (result.current.triggerProps.ref) {
      if (typeof result.current.triggerProps.ref === 'function') {
        result.current.triggerProps.ref(triggerElement);
      } else {
        (result.current.triggerProps.ref as React.MutableRefObject<HTMLElement | null>).current = triggerElement;
      }
    }
    if (result.current.popoverProps.ref) {
      if (typeof result.current.popoverProps.ref === 'function') {
        result.current.popoverProps.ref(popoverElement);
      } else {
        (result.current.popoverProps.ref as React.MutableRefObject<HTMLDivElement | null>).current = popoverElement;
      }
    }

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      fireEvent.mouseDown(triggerElement); // Click on trigger
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      fireEvent.mouseDown(popoverElement); // Click on popover
    });
    expect(result.current.isOpen).toBe(true);
  });

  it('should be controlled by open prop', () => {
    const { result, rerender } = renderHook(
      ({ open }: { open?: boolean }) => usePopover({ content: 'Test content', open }),
      { initialProps: { open: undefined } }
    );

    expect(result.current.isOpen).toBe(false);

    rerender({ open: true, content: 'Test content' });
    expect(result.current.isOpen).toBe(true);

    rerender({ open: false, content: 'Test content' });
    expect(result.current.isOpen).toBe(false);
  });

  it('should call onOpenChange callback', () => {
    const handleOpenChange = vi.fn();
    const { result } = renderHook(() => usePopover({ content: 'Test content', onOpenChange: handleOpenChange, trigger: 'click' }));

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(true);

    act(() => {
      result.current.triggerProps.onClick?.({} as React.MouseEvent<HTMLElement>);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
