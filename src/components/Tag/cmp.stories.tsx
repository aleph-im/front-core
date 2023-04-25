import React from 'react'
import { StoryFn } from '@storybook/react'

import Tag from './cmp'
import { TagProps } from './types'

export default {
  title: 'Components/UI/Tag',
  component: Tag,
  argTypes: {
    size: { control: 'text' },
  },
}

const defaultArgs: Partial<TagProps> = {
  children: 'tagg',
}

const defaultParams = {}

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
  controls: { include: ['children'], hideNoControlsWarning: true },
}
