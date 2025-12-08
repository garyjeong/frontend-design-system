
import { renderHook, act } from '@testing-library/react';
import { useFocusRestore } from '../../../src/hooks/useFocusRestore';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import React from 'react';

describe('useFocusRestore', () => {
  let btn1: HTMLButtonElement;
  let btn2: HTMLButtonElement;

  beforeEach(() => {
    btn1 = document.createElement('button');
    btn2 = document.createElement('button');
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
  });

  afterEach(() => {
    document.body.removeChild(btn1);
    document.body.removeChild(btn2);
  });

  it('should restore focus to the last focused element on unmount', () => {
    btn1.focus();
    expect(document.activeElement).toBe(btn1);

    const { unmount } = renderHook(() => useFocusRestore({ enabled: true }));

    // Simulate focus moving away while the component is mounted
    btn2.focus();
    expect(document.activeElement).toBe(btn2);

    unmount();
    expect(document.activeElement).toBe(btn1);
  });

  it('should restore focus to a specified element if restoreElementRef is provided', () => {
    btn1.focus();
    expect(document.activeElement).toBe(btn1);

    const restoreTargetRef = React.createRef<HTMLElement>();
    const div = document.createElement('div');
    div.tabIndex = 0; // Make it tabbable for focus
    document.body.appendChild(div);
    restoreTargetRef.current = div;

    const { unmount } = renderHook(() => useFocusRestore({ enabled: true, restoreElementRef: restoreTargetRef }));

    // Simulate focus moving away while the component is mounted
    btn2.focus();
    expect(document.activeElement).toBe(btn2);

    unmount();
    expect(document.activeElement).toBe(div);

    document.body.removeChild(div);
  });

  it('should not restore focus when disabled', () => {
    btn1.focus();
    expect(document.activeElement).toBe(btn1);

    const { unmount } = renderHook(() => useFocusRestore({ enabled: false }));

    btn2.focus();
    expect(document.activeElement).toBe(btn2);

    unmount();
    expect(document.activeElement).toBe(btn2); // Focus should not be restored to btn1
  });
});
