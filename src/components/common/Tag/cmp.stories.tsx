import React from 'react'
import { StoryFn } from '@storybook/react'

import Tag from './cmp'
import { TagProps } from './types'

export default {
  title: 'Components/UI/common/Tag',
  component: Tag,
  argTypes: {
    size: { control: 'text' },
  },
}

const defaultArgs: Partial<TagProps> = {
  children: 'tagg',
}

const defaultParams = {
  controls: { exclude: ['size', 'color'], hideNoControlsWarning: true },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Tag> = (args: TagProps) => <Tag {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const Variant = Template.bind({})
Variant.args = {
  ...defaultArgs,
  variant: 'accent',
}
Variant.parameters = {
  ...defaultParams,
}
