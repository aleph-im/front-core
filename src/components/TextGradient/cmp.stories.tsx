import React from 'react'
import { StoryFn } from '@storybook/react'

import TextGradient from './cmp'
import { TextGradientProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/TextGradient',
  component: TextGradient,
  argTypes: {
    size: { control: 'text' },
  }
} 

const defaultArgs: Partial<TextGradientProps> = {
  children: 'Aleph.im',
  type: 'h1',
  color: 'main0',
  size: undefined,
}

const defaultParams = {
} 

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof TextGradient> = (args: TextGradientProps) => <TextGradient {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const Custom = Template.bind({})
Custom.args = {
  ...defaultArgs,
  type: 'body',
  color: 'main1'
}
Custom.parameters = {
  ...defaultParams,
}
