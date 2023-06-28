import type { StorybookConfig } from "@storybook/react-vite";
import * as path from "path";
const config: StorybookConfig = {
  stories: ["../src/_docs/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
  async viteFinal(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, "../src");
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: false,
        minify: false,
      },
    }
  }
};
export default config;
