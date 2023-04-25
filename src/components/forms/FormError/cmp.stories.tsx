import React from 'react'
import { StoryFn } from '@storybook/react'

import FormError from './cmp'
import { FormErrorProps } from './types'

export default {
  title: 'Components/UI/forms/FormError',
  component: FormError,
} 

const defaultArgs: Partial<FormErrorProps> = {
  error: new Error('There was an error'),
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof FormError> = (args) => <FormError {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
} 

// ---

export const Warning = Template.bind({})
Warning.args = {
  ...defaultArgs,
  error: { message: 'Warning message', type: 'warn' },
}
Warning.parameters = {
  ...defaultParams,
}
