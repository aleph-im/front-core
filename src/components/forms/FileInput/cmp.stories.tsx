import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'

import FileInput from './cmp'
import { FileInputProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/FileInput',
  component: FileInput,
}

const defaultArgs: Partial<FileInputProps> = {
  value: undefined,
  multiple: false,
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof FileInput> = (args) => {
  const [value, setValue] = useState<File | File[]>()
  const values = value ? (Array.isArray(value) ? value : [value]) : undefined

  return (
    <>
      <div style={{ width: 400 }}>
        <FileInput {...args} value={value} onChange={setValue} />
      </div>
      <h6 tw="my-5">value:</h6>
      <pre tw="flex flex-col gap-2">
        <div>Is array: {Array.isArray(value) + ''}</div>
        <div>
          {values
            ?.map(
              (file) =>
                `${file.name} (${(file.size / 1024 ** 2).toFixed(2)} MB)`,
            )
            .join('\n')}
        </div>
      </pre>
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

// ---

export const Multiple = Template.bind({})
Multiple.args = {
  ...defaultArgs,
  multiple: true,
}
Multiple.parameters = {
  ...defaultParams,
}
