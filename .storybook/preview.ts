import type { Preview } from "@storybook/react";
import '../src/index.css'; // Import global styles
import runContrastChecks from '@/shared/lib/accessibility/contrast';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// Run contrast checks after each story renders (non-blocking)
export const decorators = [
  (Story) => {
    React.useEffect(() => {
      // run after next tick so styles applied
      const t = setTimeout(() => {
        try {
          runContrastChecks(document.querySelector('#root') || document.body);
        } catch (e) {
          // swallow
        }
      }, 50);
      return () => clearTimeout(t);
    }, []);
    return React.createElement(Story);
  },
];

