import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import TextArea from './cmp'
import { TextAreaProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/TextArea',
  component: TextArea,
}

const defaultArgs: Partial<TextAreaProps> = {
  name: 'text-area',
  placeholder: 'Placeholder',
  value: '',
}

const defaultParams = {
  controls: { exclude: ['color', 'size', 'name', 'button'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof TextArea> = (args) => {
  const [value, setValue] = useState<string>(args.value as string)

  return (
    <>
      <TextArea
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
}

export const Code = Template.bind({})
Code.args = {
  ...defaultArgs,
  variant: 'code',
}
Code.parameters = {
  ...defaultParams,
}
