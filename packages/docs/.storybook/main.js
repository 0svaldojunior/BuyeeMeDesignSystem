/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    "storybook-dark-mode",
  ],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/BuyeeMeDesignSystem/'
    }
    return config;
  },
  refs: {
    'design-system': {
      title: 'Buyee.me Design System',
      url: 'https://0svaldojunior.github.io/BuyeeMeDesignSystem/',
      expanded: false, // Optional, true by default
    },
  },
};
export default config;
