import React from 'react'
import { StoryFn } from '@storybook/react'

import Spinner from './cmp'
import { SpinnerProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'text' },
  },
}

const defaultArgs: Partial<SpinnerProps> = {
  size: undefined,
}

const defaultParams = {}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

export const CustomSizeAndColor = Template.bind({})
CustomSizeAndColor.args = {
  ...defaultArgs,
  size: '10rem',
  color: 'main0',
}
CustomSizeAndColor.parameters = {
  ...defaultParams,
}
