
import { renderHook, act, fireEvent } from '@testing-library/react';
import { useTooltip } from '../src/hooks/useTooltip';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';

describe('useTooltip', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should return initial state correctly', () => {
    const { result } = renderHook(() => useTooltip({ content: 'Test content' }));
    expect(result.current.isVisible).toBe(false);
    expect(result.current.triggerProps).toBeDefined();
    expect(result.current.tooltipProps).toBeDefined();
    expect(result.current.tooltipProps.role).toBe('tooltip');
    expect(result.current.contentId).toMatch(/^tooltip-/);
  });

  it('should open tooltip on mouse enter and close on mouse leave', () => {
    const { result } = renderHook(() => useTooltip({ content: 'Test content', delay: 100 }));

    act(() => {
      result.current.triggerProps.onMouseEnter?.({} as React.MouseEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.triggerProps.onMouseLeave?.({} as React.MouseEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isVisible).toBe(false);
  });

  it('should open tooltip on focus and close on blur', () => {
    const { result } = renderHook(() => useTooltip({ content: 'Test content', delay: 100 }));

    act(() => {
      result.current.triggerProps.onFocus?.({} as React.FocusEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.triggerProps.onBlur?.({} as React.FocusEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isVisible).toBe(false);
  });

  it('should close tooltip on Escape keydown', () => {
    const { result } = renderHook(() => useTooltip({ content: 'Test content', delay: 100 }));

    act(() => {
      result.current.triggerProps.onMouseEnter?.({} as React.MouseEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isVisible).toBe(true);

    act(() => {
      result.current.triggerProps.onKeyDown?.({ key: 'Escape' } as React.KeyboardEvent);
    });
    expect(result.current.isVisible).toBe(false);
  });

  it('should be controlled by open prop', () => {
    const { result, rerender } = renderHook(({ open }) => useTooltip({ content: 'Test content', open }));

    expect(result.current.isVisible).toBe(false);

    rerender({ open: true, content: 'Test content' });
    expect(result.current.isVisible).toBe(true);

    rerender({ open: false, content: 'Test content' });
    expect(result.current.isVisible).toBe(false);
  });

  it('should call onOpenChange callback', () => {
    const handleOpenChange = vi.fn();
    const { result } = renderHook(() => useTooltip({ content: 'Test content', onOpenChange: handleOpenChange, delay: 100 }));

    act(() => {
      result.current.triggerProps.onMouseEnter?.({} as React.MouseEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(true);

    act(() => {
      result.current.triggerProps.onMouseLeave?.({} as React.MouseEvent<HTMLElement>);
      vi.advanceTimersByTime(100);
    });
    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
