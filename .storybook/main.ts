import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    // Prefer shared UI stories; include all but explicitly exclude component-level and legacy story folders
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "!../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "!../src/_legacy_stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

