import React from 'react'
import { StoryFn } from '@storybook/react'

import Logo from './cmp'
import { LogoProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Logo',
  component: Logo,
  argTypes: {
    size: { control: 'text' },
    text: { control: 'text' },
  },
}

const defaultArgs: Partial<LogoProps> = {
  size: undefined,
}

const defaultParams = {}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Logo> = (args) => <Logo {...args} />

// ---

export const OnlyIcon = Template.bind({})
OnlyIcon.args = {
  ...defaultArgs,
  text: false,
  byAleph: false,
}
OnlyIcon.parameters = {
  ...defaultParams,
}

// ---

export const WithText = Template.bind({})
WithText.args = {
  ...defaultArgs,
  text: true,
}
WithText.parameters = {
  ...defaultParams,
}

// ---

export const WithColor = Template.bind({})
WithColor.args = {
  ...defaultArgs,
  color: 'main0',
  size: '100px',
  byAleph: false,
}
WithColor.parameters = {
  ...defaultParams,
}

// ---

export const CustomSize = Template.bind({})
CustomSize.args = {
  ...defaultArgs,
  size: '4rem',
  byAleph: false,
}
CustomSize.parameters = {
  ...defaultParams,
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const TemplateWithLink: StoryFn<typeof Logo> = (args) => (
  <a href="https://twentysix.cloud/">
    <Logo {...args} />
  </a>
)

export const WithLink = TemplateWithLink.bind({})
WithLink.args = {
  ...defaultArgs,
  size: '2rem',
  text: true,
  byAleph: true,
}
WithLink.parameters = {
  ...defaultParams,
}
