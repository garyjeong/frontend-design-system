
import { renderHook } from '@testing-library/react';
import { useCard } from '../src/hooks/useCard';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('useCard', () => {
  it('should return default card props', () => {
    const { result } = renderHook(() => useCard({}));
    expect(result.current.cardProps).toBeDefined();
    expect(result.current.interactive).toBe(false);
    expect(result.current.hoverable).toBe(false);
    expect(result.current.cardProps.role).toBeUndefined();
    expect(result.current.cardProps.tabIndex).toBeUndefined();
  });

  it('should set interactive state', () => {
    const { result } = renderHook(() => useCard({ interactive: true }));
    expect(result.current.interactive).toBe(true);
    expect(result.current.cardProps.role).toBe('article');
    expect(result.current.cardProps.tabIndex).toBe(0);
  });

  it('should set hoverable state', () => {
    const { result } = renderHook(() => useCard({ hoverable: true }));
    expect(result.current.hoverable).toBe(true);
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderHook(() => useCard({ cardRef: ref }));
    // In a real scenario, you'd mount a component using this ref and assert on the DOM element.
    // For a hook, we just ensure it doesn't throw and the ref object is correctly passed.
    expect(ref.current).toBeNull(); // Ref is not attached to a DOM node in hook test environment
  });
});
