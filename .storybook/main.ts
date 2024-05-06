import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/Introduction.stories.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/react",
  ],
  framework: "@storybook/nextjs",
  staticDirs: ["../public/"],
  docs: {
    autodocs: "tag",
  },
};
export default config;
