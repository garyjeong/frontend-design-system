
import { renderHook, act } from '@testing-library/react';
import { useFocusVisible } from '../src/hooks/useFocusVisible';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';

describe('useFocusVisible', () => {
  let element: HTMLButtonElement;

  beforeEach(() => {
    element = document.createElement('button');
    document.body.appendChild(element);
    element.focus(); // Ensure the element can receive focus
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should return false by default', () => {
    const ref = { current: element };
    const { result } = renderHook(() => useFocusVisible({ ref }));
    expect(result.current).toBe(false);
  });

  it('should set isFocusVisible to true on Tab keydown', () => {
    const ref = { current: element };
    const { result } = renderHook(() => useFocusVisible({ ref }));

    act(() => {
      element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    });
    expect(result.current).toBe(true);
  });

  it('should set isFocusVisible to false on mousedown', () => {
    const ref = { current: element };
    const { result } = renderHook(() => useFocusVisible({ ref }));

    act(() => {
      element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    });
    expect(result.current).toBe(true);

    act(() => {
      element.dispatchEvent(new MouseEvent('mousedown'));
    });
    expect(result.current).toBe(false);
  });

  it('should set isFocusVisible to false on blur', () => {
    const ref = { current: element };
    const { result } = renderHook(() => useFocusVisible({ ref }));

    act(() => {
      element.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
    });
    expect(result.current).toBe(true);

    act(() => {
      element.blur();
    });
    expect(result.current).toBe(false);
  });

  it('should clean up event listeners on unmount', () => {
    const addEventListenerSpy = vi.spyOn(element, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(element, 'removeEventListener');

    const ref = { current: element };
    const { unmount } = renderHook(() => useFocusVisible({ ref }));

    expect(addEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(addEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(removeEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function));
  });
});
