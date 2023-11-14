
import { ThemeProvider } from 'styled-components';
import { themes as theming } from '@storybook/theming';

import { themes } from '../src/themes';
import { GlobalStyles } from '../src/styles';
import logoDark from '../assets/img/aleph-dark.svg';
import logoLight from '../assets/img/aleph-light.svg';

function getThemeColors(theme) {
  const { color } = theme;

  return {
    brandTitle: 'Aleph.im Components',
    brandUrl: 'https://aleph.im/',
    brandImage: theme.name.toLowerCase().indexOf('light') !== -1 ? logoLight : logoDark,
    appBg: color.background,
    appContentBg: color.contentBackground,
    barBg: color.foreground,
    inputBg: color.foreground,
    barSelectedColor: color.secondary,
    colorPrimary: color.primary,
    colorSecondary: color.secondary,
    brandTarget: '_blank'
    // appBorderColor?: string;
    // appBorderRadius?: number;
    // fontBase?: string;
    // fontCode?: string;
    // textColor?: string;
    // textInverseColor?: string;
    // textMutedColor?: string;
    // barTextColor?: string;
    // inputBorder?: string;
    // inputTextColor?: string;
    // inputBorderRadius?: number;
    // gridCellSize?: number;
  }
}

// All stories expect a theme arg
export const argTypes = {
  size: { control: { type: 'inline-radio' } },
  color: {
    control: {
      type: 'color',
      presetColors: Object.entries(themes.alephDark.color).map(([title, color]) => ({ title, color }))
    }
  },
};

// The default value of the theme arg to all stories
// export const args = {
//   size: 'lg',
//   color: 'white'
// };

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  darkMode: {
    current: 'dark',
    // Override the default dark theme
    dark: {
      ...theming.dark,
      ...getThemeColors(themes.alephDark)
    },
    // Override the default light theme
    light: {
      ...theming.normal,
      ...getThemeColors(themes.alephLight)
    }
  },
  docs: {
    // https://storybook.js.org/docs/react/writing-docs/docs-page#inline-stories-vs-iframe-stories
    inlineStories: false,
    // https://github.com/storybookjs/storybook/issues/8112#issuecomment-1292728430
    iframeHeight: 500,
    theme: {
      ...theming.dark,
      ...getThemeColors(themes.alephDark)
    },
  }
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Platform Theme',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'dark', title: 'Dark' },
        { value: 'light', title: 'Light' },
      ],
    },
  },
}

// const publicThemes = themeList.filter(t => t.name.indexOf('aleph') === -1)

const themingDecorator = (Story, context) => (
  <>
    <ThemeProvider theme={themes[context.globals.theme]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </>
)

export const decorators = [
  themingDecorator
]
