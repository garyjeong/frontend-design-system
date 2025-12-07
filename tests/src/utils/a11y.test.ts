
import { generateId, getAriaProps } from '../src/utils/a11y';
import { describe, it, expect } from 'vitest';

describe('a11y utilities', () => {
  it('generateId should return a unique ID with prefix', () => {
    const id1 = generateId('test');
    const id2 = generateId('test');
    expect(id1).toMatch(/^test-\d+$/);
    expect(id2).toMatch(/^test-\d+$/);
    expect(id1).not.toBe(id2);
  });

  it('generateId should return a unique ID without prefix', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).toMatch(/^id-\d+$/); // Default prefix
    expect(id2).toMatch(/^id-\d+$/);
    expect(id1).not.toBe(id2);
  });

  it('getAriaProps should extract aria-* and role props', () => {
    const props = {
      id: 'someId',
      className: 'someClass',
      'aria-label': 'Label',
      'aria-hidden': true,
      role: 'button',
      dataTestId: 'data',
    };

    const ariaProps = getAriaProps(props);
    expect(ariaProps).toEqual({
      'aria-label': 'Label',
      'aria-hidden': true,
      role: 'button',
    });
  });

  it('getAriaProps should return an empty object if no aria-* or role props', () => {
    const props = {
      id: 'someId',
      className: 'someClass',
      dataTestId: 'data',
    };

    const ariaProps = getAriaProps(props);
    expect(ariaProps).toEqual({});
  });
});
