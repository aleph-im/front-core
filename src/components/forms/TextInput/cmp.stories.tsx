import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import TextInput from './cmp'
import { TextInputProps } from './types'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/TextInput',
  component: TextInput,
}

const defaultArgs: Partial<TextInputProps> = {
  name: 'text-input',
  placeholder: 'Placeholder',
  value: '',
  disabled: false,
}

const defaultParams = {
  controls: { exclude: ['color', 'size', 'name', 'button'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof TextInput> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <TextInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h6 tw="my-5">value:</h6>
      <pre>{value}</pre>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
  controls: { exclude: [...defaultParams.controls.exclude, 'buttonStyle'] },
}

// ---

export const WithButton = Template.bind({})
WithButton.args = {
  ...defaultArgs,
  button: (
    <Button variant="primary" size="lg" color="main0">
      Dynamic text size
    </Button>
  ),
  buttonStyle: 'stuck',
}
WithButton.parameters = {
  ...defaultParams,
}

// ---

export const WithButtonContainer = Template.bind({})
WithButtonContainer.args = {
  ...defaultArgs,
  button: (
    <Button variant="primary" size="md" color="main0">
      Click
    </Button>
  ),
  buttonStyle: 'wrapped',
}
WithButtonContainer.parameters = {
  ...defaultParams,
}

// ---

export const WithButtonVariant = Template.bind({})
WithButtonVariant.args = {
  ...defaultArgs,
  button: (
    <Button variant="secondary" size="md" color="main0">
      Click
    </Button>
  ),
  buttonStyle: 'stuck',
}
WithButtonVariant.parameters = {
  ...defaultParams,
}

// ---

export const WithError = Template.bind({})
WithError.args = {
  ...defaultArgs,
  label: 'Label',
  error: new Error('Error Message'),
}
WithError.parameters = {
  ...defaultParams,
}

// ---

export const WithWarning = Template.bind({})
WithWarning.args = {
  ...defaultArgs,
  label: 'Label',
  error: { message: 'Warning message', level: 'warning' },
}
WithWarning.parameters = {
  ...defaultParams,
}

// ---

export const Disabled = Template.bind({})
Disabled.args = {
  ...defaultArgs,
  value: 'text',
  disabled: true,
}
Disabled.parameters = {
  ...defaultParams,
}

// ---

export const DataView = Template.bind({})
DataView.args = {
  ...defaultArgs,
  value: 'Data View mode',
  dataView: true,
  disabled: false,
}
DataView.parameters = {
  ...defaultParams,
}

// ---

export const WithIcon = Template.bind({})
WithIcon.args = {
  ...defaultArgs,
  icon: <Icon name="search" size="lg" />,
  buttonStyle: 'wrapped',
  disabled: false,
}
WithIcon.parameters = {
  ...defaultParams,
}

export const WithIconAndButton = Template.bind({})
WithIconAndButton.args = {
  ...defaultArgs,
  icon: <Icon name="search" size="lg" />,
  buttonStyle: 'wrapped',
  button: (
    <Button variant="primary" size="md" color="main0">
      Click
    </Button>
  ),
}
WithIconAndButton.parameters = {
  ...defaultParams,
}
