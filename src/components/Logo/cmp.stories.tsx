import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Logo from './cmp'
import { LogoProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Logo',
  component: Logo,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'text' },
  }
} as ComponentMeta<typeof Logo>

const defaultArgs: Partial<LogoProps> = {
  size: undefined
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A2118&t=XeMPIFw7c4dnGQr1-0',
  },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

// ---

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  ...defaultArgs,
  label: false
}
OnlyIcon.parameters = {
  ...defaultParams,
}

// ---

export const WithLabel = Template.bind({})
WithLabel.args = {
  ...defaultArgs,
  label: true
}
WithLabel.parameters = {
  ...defaultParams,
}

// ---

export const WithColor = Template.bind({})
WithColor.args = {
  ...defaultArgs,
  label: true,
  color: 'main0',
  size: '100px'
}
WithColor.parameters = {
  ...defaultParams,
}

// ---

export const CustomSize = Template.bind({})
CustomSize.args = {
  ...defaultArgs,
  label: true,
  size: '4rem'
}
CustomSize.parameters = {
  ...defaultParams,
}
