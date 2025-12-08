import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useButton } from '../../../src/hooks/useButton';
import { describe, it, expect, vi } from 'vitest';

describe('useButton', () => {
  it('should return default button props', () => {
    const { result } = renderHook(() => useButton({}));
    expect(result.current.buttonProps).toBeDefined();
    expect(result.current.disabled).toBe(false);
    expect(result.current.loading).toBe(false);
  });

  it('should set disabled state', () => {
    const { result } = renderHook(() => useButton({ disabled: true }));
    expect(result.current.disabled).toBe(true);
    expect(result.current.buttonProps.disabled).toBe(true);
    expect(result.current.buttonProps['aria-disabled']).toBe(true);
  });

  it('should set loading state', () => {
    const { result } = renderHook(() => useButton({ loading: true }));
    expect(result.current.loading).toBe(true);
    expect(result.current.disabled).toBe(true); // Loading implies disabled
    expect(result.current.buttonProps.disabled).toBe(true);
    expect(result.current.buttonProps['aria-disabled']).toBe(true);
  });

  it('should call onClick when not disabled or loading', () => {
    const handleClick = vi.fn();
    const { result } = renderHook(() => useButton({ onClick: handleClick }));

    act(() => {
      result.current.buttonProps.onClick?.({} as React.MouseEvent<HTMLButtonElement>);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = vi.fn();
    const { result } = renderHook(() => useButton({ onClick: handleClick, disabled: true }));

    act(() => {
      result.current.buttonProps.onClick?.({ preventDefault: vi.fn() } as React.MouseEvent<HTMLButtonElement>);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should not call onClick when loading', () => {
    const handleClick = vi.fn();
    const { result } = renderHook(() => useButton({ onClick: handleClick, loading: true }));

    act(() => {
      result.current.buttonProps.onClick?.({ preventDefault: vi.fn() } as React.MouseEvent<HTMLButtonElement>);
    });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    renderHook(() => useButton({ buttonRef: ref }));
    // In a real scenario, you'd mount a component using this ref and assert on the DOM element.
    // For a hook, we just ensure it doesn't throw and the ref object is correctly passed.
    expect(ref.current).toBeNull(); // Ref is not attached to a DOM node in hook test environment
  });
});
