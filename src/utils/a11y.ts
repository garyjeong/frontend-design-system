
let seed = 0;
export const generateId = (prefix = 'id') => {
  seed += 1;
  return `${prefix}-${seed}`;
};

export const getAriaProps = (props: Record<string, unknown>) => {
  const ariaProps: Record<string, unknown> = {};
  for (const key in props) {
    if (key.startsWith('aria-') || key.startsWith('role')) {
      ariaProps[key] = props[key];
    }
  }
  return ariaProps;
};
