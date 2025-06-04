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

// ---

export const FixedWidth = () => {
  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')
  const [value3, setValue3] = useState<string>('')

  return (
    <div tw="space-y-4">
      <div>
        <h6 tw="mb-2">Default width (auto)</h6>
        <TextInput
          name="default"
          placeholder="Default width"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <h6 tw="mb-2">Fixed width: 200px</h6>
        <TextInput
          name="fixed-200"
          placeholder="200px width"
          width="200px"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <h6 tw="mb-2">Fixed width: 6rem</h6>
        <TextInput
          name="fixed-120"
          placeholder="6rem width"
          width={'6rem'}
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </div>
  )
}
FixedWidth.parameters = {
  ...defaultParams,
}

// ---

export const TextAlignment = () => {
  const [value1, setValue1] = useState<string>('Left aligned')
  const [value2, setValue2] = useState<string>('Center aligned')
  const [value3, setValue3] = useState<string>('Right aligned')

  return (
    <div tw="space-y-4">
      <div>
        <h6 tw="mb-2">Left aligned (default)</h6>
        <TextInput
          name="left"
          placeholder="Left aligned text"
          textAlign="left"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <h6 tw="mb-2">Center aligned</h6>
        <TextInput
          name="center"
          placeholder="Center aligned text"
          textAlign="center"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <h6 tw="mb-2">Right aligned</h6>
        <TextInput
          name="right"
          placeholder="Right aligned text"
          textAlign="right"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
      </div>
    </div>
  )
}
TextAlignment.parameters = {
  ...defaultParams,
}

// ---

export const Loading = () => {
  return (
    <div tw="space-y-4">
      <div>
        <h6 tw="mb-2">Loading - Left aligned</h6>
        <TextInput
          name="loading-left"
          placeholder="Loading..."
          textAlign="left"
          loading={true}
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <h6 tw="mb-2">Loading - Center aligned</h6>
        <TextInput
          name="loading-center"
          placeholder="Loading..."
          textAlign="center"
          loading={true}
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <h6 tw="mb-2">Loading - Right aligned</h6>
        <TextInput
          name="loading-right"
          placeholder="Loading..."
          textAlign="right"
          loading={true}
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  )
}
Loading.parameters = {
  ...defaultParams,
}

// ---

export const LoadingWithIcon = () => {
  return (
    <div tw="space-y-4">
      <div>
        <h6 tw="mb-2">Loading with Icon - Left aligned</h6>
        <TextInput
          name="loading-icon-left"
          placeholder="Loading..."
          textAlign="left"
          loading={true}
          icon={<Icon name="search" size="lg" />}
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <h6 tw="mb-2">Loading with Icon - Center aligned</h6>
        <TextInput
          name="loading-icon-center"
          placeholder="Loading..."
          textAlign="center"
          loading={true}
          icon={<Icon name="search" size="lg" />}
          value=""
          onChange={() => {}}
        />
      </div>
      <div>
        <h6 tw="mb-2">Loading with Icon - Right aligned</h6>
        <TextInput
          name="loading-icon-right"
          placeholder="Loading..."
          textAlign="right"
          loading={true}
          icon={<Icon name="search" size="lg" />}
          value=""
          onChange={() => {}}
        />
      </div>
    </div>
  )
}
LoadingWithIcon.parameters = {
  ...defaultParams,
}
