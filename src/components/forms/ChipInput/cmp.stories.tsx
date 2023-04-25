import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'

import ChipInput from './cmp'
import { ChipInputProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/ChipInput',
  component: ChipInput,
}

const defaultArgs: Partial<ChipInputProps> = {
  value: [],
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof ChipInput> = (args) => {
  const [value, setValue] = useState<string[]>(args.value as string[])

  return (
    <>
      <div style={{ width: 400 }}>
        <ChipInput {...args} value={value} onChange={(v) => setValue(v)} />
      </div>
      <h6 tw="my-5">value:</h6>
      <pre>{JSON.stringify(value, null, 2)}</pre>
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
