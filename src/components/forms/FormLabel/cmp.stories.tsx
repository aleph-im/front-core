import React from 'react'
import { StoryFn } from '@storybook/react'

import FormLabel from './cmp'
import { FormLabelProps } from './types'

export default {
  title: 'Components/UI/forms/FormLabel',
  component: FormLabel,
}

const defaultArgs: Partial<FormLabelProps> = {
  label: 'My label',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof FormLabel> = (args) => <FormLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const WithError = Template.bind({})
WithError.args = {
  ...defaultArgs,
  error: { message: 'Error message', level: 'warning' },
}
WithError.parameters = {
  ...defaultParams,
}
