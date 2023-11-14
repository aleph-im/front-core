import React from 'react'
import { StoryFn } from '@storybook/react'

import Label from './cmp'
import { LabelProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Label',
  component: Label,
}

const defaultArgs: Partial<LabelProps> = {
  variant: 'success',
  kind: 'primary',
  children: 'Label',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Label> = (args) => <Label {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
