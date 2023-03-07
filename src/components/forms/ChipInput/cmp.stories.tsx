import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ChipInput from './cmp'
import { ChipInputProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/ChipInput',
  component: ChipInput,
  decorators: [withDesign],
} as ComponentMeta<typeof ChipInput>

const defaultArgs: Partial<ChipInputProps> = {
  
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
const Template: ComponentStory<typeof ChipInput> = (args) => <div style={{ width: 400 }}><ChipInput {...args} /></div>

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
