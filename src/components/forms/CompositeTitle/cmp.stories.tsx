import React from 'react'
import { StoryFn } from '@storybook/react'

import CompositeTitle from './cmp'
import { CompositeTitleProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/CompositeTitle',
  component: CompositeTitle,
}

const defaultArgs: Partial<CompositeTitleProps> = {
  number: '01',
  label: 'beta',
  children: 'Title',
  as: 'h2',
}

const defaultParams = {}

// ---

const Template: StoryFn<typeof CompositeTitle> = (
  args: CompositeTitleProps,
) => <CompositeTitle {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
