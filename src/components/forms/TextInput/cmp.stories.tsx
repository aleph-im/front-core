import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import TextInput from './cmp'
import { TextInputProps } from './types'
import Button from '../../Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/TextInput',
  component: TextInput,
  decorators: [withDesign],
} as ComponentMeta<typeof TextInput>

const defaultArgs: Partial<TextInputProps> = {
  name: 'text-input',
  placeholder: 'Placeholder',
  value: ''
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A2798&t=0wKsIxJm3NeUERex-0',
  },
  controls: { exclude: ['color', 'size', 'name', 'button'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <TextInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h6 className='my-md'>value:</h6>
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
  button: <Button variant='primary' kind='neon' size='big' color='main0'>Dynamic text size</Button>,
  buttonStyle: 'stuck'
}
WithButton.parameters = {
  ...defaultParams,
}

// ---

export const WithButtonContainer = Template.bind({})
WithButtonContainer.args = {
  ...defaultArgs,
  button: <Button variant='primary' kind='neon' size='regular' color='main0'>Click</Button>,
  buttonStyle: 'wrapped'
}
WithButtonContainer.parameters = {
  ...defaultParams,
}

// ---

export const WithButtonVariant = Template.bind({})
WithButtonVariant.args = {
  ...defaultArgs,
  button: <Button variant='secondary' kind='neon' size='regular' color='main0'>Click</Button>,
  buttonStyle: 'stuck'
}
WithButtonVariant.parameters = {
  ...defaultParams,
}


// ---

export const WithError = Template.bind({})
WithError.args = {
  ...defaultArgs,
  label: 'Label',
  error: new Error('Error Message')
}
WithError.parameters = {
  ...defaultParams,
  controls: { exclude: [...defaultParams.controls.exclude, 'button', 'buttonStyle'] },
}


// ---

export const WithWarning = Template.bind({})
WithWarning.args = {
  ...defaultArgs,
  label: 'Label',
  error: { message: 'Warning message', type: 'warn' }
}
WithWarning.parameters = {
  ...defaultParams,
  controls: { exclude: [...defaultParams.controls.exclude, 'button', 'buttonStyle'] },
}
