module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    // Disable react-docgen-typescript to speed up dev startup (~7s savings).
    // Trade-off: no auto-generated prop tables in the Docs tab.
    // The Controls panel and stories themselves are unaffected.
    reactDocgen: false,
  },
}
