import { ThemeProvider } from 'styled-components'
import { themes as theming } from '@storybook/theming'

import { themes } from '../src/themes'
import { GlobalStyles } from '../src/styles'
import logoDark from '../assets/img/aleph-dark.svg'
import logoLight from '../assets/img/aleph-light.svg'

function getThemeColors(theme) {
  const { color } = theme.storybook

  return {
    brandTitle: 'Aleph Cloud Components',
    brandUrl: 'https://aleph.im/',
    brandImage:
      theme.name.indexOf('dark') !== -1 || theme.name === 'aleph'
        ? logoDark
        : logoLight,
    appBg: color.background,
    appContentBg: color.contentBackground,
    barBg: color.foreground,
    inputBg: color.foreground,
    barSelectedColor: color.secondary,
    colorPrimary: color.primary,
    colorSecondary: color.secondary,
    brandTarget: '_blank',
  }
}

export const argTypes = {
  size: { control: { type: 'inline-radio' } },
  color: {
    control: {
      type: 'color',
      presetColors: Object.entries(themes['aleph-cloud-light'].color).map(
        ([title, color]) => ({ title, color }),
      ),
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  darkMode: {
    current: 'light',
    dark: {
      ...theming.dark,
      ...getThemeColors(themes['aleph-cloud-dark']),
    },
    light: {
      ...theming.normal,
      ...getThemeColors(themes['aleph-cloud-light']),
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: 500,
    theme: {
      ...theming.normal,
      ...getThemeColors(themes['aleph-cloud-light']),
    },
  },
}

export const initialGlobals = {
  theme: 'aleph-cloud-light',
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Platform Theme',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'aleph-cloud-light', title: 'Aleph Cloud Light' },
        { value: 'aleph-cloud-dark', title: 'Aleph Cloud Dark' },
        { value: 'aleph', title: 'Legacy Aleph' },
      ],
    },
  },
}

const themingDecorator = (Story, context) => {
  const themeName = context.globals.theme || 'aleph-cloud-light'
  const theme = themes[themeName] || themes['aleph-cloud-light']

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
}

export const decorators = [themingDecorator]
