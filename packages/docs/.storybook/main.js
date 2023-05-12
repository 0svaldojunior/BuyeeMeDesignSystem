/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-a11y', "storybook-dark-mode", "@storybook/addon-mdx-gfm"],
  core: {},
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/BuyeeMeDesignSystem/';
    }
    return config;
  }
};
export default config;