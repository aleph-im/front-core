import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ChipInput from './cmp'
import { ChipInputProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/forms/ChipInput',
  component: ChipInput,
  decorators: [withDesign],
} as ComponentMeta<typeof ChipInput>

const defaultArgs: Partial<ChipInputProps> = {
  value: []
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A1599&t=XeMPIFw7c4dnGQr1-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof ChipInput> = (args) => {
  const [value, setValue] = useState<string[]>(args.value as string[])

  return (
    <>
      <div style={{ width: 400 }}>
        <ChipInput
          {...args}
          value={value}
          onChange={v => setValue(v)}
        />
      </div>
      <h6 className='my-md'>value:</h6>
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
