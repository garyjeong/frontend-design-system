
import { renderHook, act } from '@testing-library/react';
import { useInput } from '../src/hooks/useInput';
import { describe, it, expect, vi } from 'vitest';

describe('useInput', () => {
  it('should return default input props', () => {
    const { result } = renderHook(() => useInput({}));
    expect(result.current.inputProps).toBeDefined();
    expect(result.current.disabled).toBe(false);
    expect(result.current.readOnly).toBe(false);
    expect(result.current.required).toBe(false);
    expect(result.current.inputProps.value).toBe('');
  });

  it('should set initial value from defaultValue', () => {
    const { result } = renderHook(() => useInput({ defaultValue: 'initial' }));
    expect(result.current.inputProps.value).toBe('initial');
  });

  it('should set initial value from value prop', () => {
    const { result } = renderHook(() => useInput({ value: 'controlled' }));
    expect(result.current.inputProps.value).toBe('controlled');
  });

  it('should prioritize value prop over defaultValue', () => {
    const { result } = renderHook(() => useInput({ defaultValue: 'initial', value: 'controlled' }));
    expect(result.current.inputProps.value).toBe('controlled');
  });

  it('should update value when controlled value prop changes', () => {
    const { result, rerender } = renderHook(({ value }) => useInput({ value }));
    expect(result.current.inputProps.value).toBe(undefined); // Initial render with no value

    rerender({ value: 'new value' });
    expect(result.current.inputProps.value).toBe('new value');
  });

  it('should handle input changes for uncontrolled input', () => {
    const handleChange = vi.fn();
    const { result } = renderHook(() => useInput({ onChange: handleChange }));

    act(() => {
      result.current.inputProps.onChange?.({ target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputProps.value).toBe('test');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should not handle input changes when disabled', () => {
    const handleChange = vi.fn();
    const { result } = renderHook(() => useInput({ onChange: handleChange, disabled: true }));

    act(() => {
      result.current.inputProps.onChange?.({ preventDefault: vi.fn(), target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputProps.value).toBe(''); // Value should not change
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should not handle input changes when readOnly', () => {
    const handleChange = vi.fn();
    const { result } = renderHook(() => useInput({ onChange: handleChange, readOnly: true }));

    act(() => {
      result.current.inputProps.onChange?.({ preventDefault: vi.fn(), target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputProps.value).toBe(''); // Value should not change
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('should set accessibility attributes', () => {
    const { result } = renderHook(() => useInput({ disabled: true, readOnly: true, required: true }));
    expect(result.current.inputProps['aria-disabled']).toBe(true);
    expect(result.current.inputProps['aria-readonly']).toBe(true);
    expect(result.current.inputProps['aria-required']).toBe(true);
  });
});
