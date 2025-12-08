
import { renderHook, act } from '@testing-library/react';
import { useFocusTrap } from '../../../src/hooks/useFocusTrap';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';

describe('useFocusTrap', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should not trap focus when disabled', () => {
    const ref = { current: container };
    renderHook(() => useFocusTrap({ enabled: false, containerRef: ref }));

    const btn = document.createElement('button');
    container.appendChild(btn);
    btn.focus();

    expect(document.activeElement).toBe(btn);
  });

  it('should focus the first tabbable element when enabled', () => {
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.appendChild(btn1);
    container.appendChild(btn2);

    const ref = { current: container };
    renderHook(() => useFocusTrap({ enabled: true, containerRef: ref }));

    expect(document.activeElement).toEqual(btn1);
  });

  it('should trap focus within the container when tabbing forward', () => {
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.appendChild(btn1);
    container.appendChild(btn2);

    const ref = { current: container };
    renderHook(() => useFocusTrap({ enabled: true, containerRef: ref }));

    // Initial focus on btn1
    expect(document.activeElement).toEqual(btn1);

    // Tab forward from btn1 to btn2
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
      document.activeElement?.dispatchEvent(event);
    });
    expect(document.activeElement).toEqual(btn2);

    // Tab forward from btn2 should go back to btn1
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true });
      document.activeElement?.dispatchEvent(event);
    });
    expect(document.activeElement).toEqual(btn1);
  });

  it('should trap focus within the container when tabbing backward', () => {
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    container.appendChild(btn1);
    container.appendChild(btn2);

    const ref = { current: container };
    renderHook(() => useFocusTrap({ enabled: true, containerRef: ref }));

    // Initial focus on btn1
    expect(document.activeElement).toEqual(btn1);

    // Shift+Tab from btn1 should go to btn2
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
      document.activeElement?.dispatchEvent(event);
    });
    expect(document.activeElement).toEqual(btn2);

    // Shift+Tab from btn2 should go back to btn1
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true });
      document.activeElement?.dispatchEvent(event);
    });
    expect(document.activeElement).toEqual(btn1);
  });

  it('should clean up event listener on unmount', () => {
    const addEventListenerSpy = vi.spyOn(container, 'addEventListener');
    const removeEventListenerSpy = vi.spyOn(container, 'removeEventListener');

    const btn = document.createElement('button');
    container.appendChild(btn);

    const ref = { current: container };
    const { unmount } = renderHook(() => useFocusTrap({ enabled: true, containerRef: ref }));

    expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});
