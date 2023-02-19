import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import TextGradient from './cmp'
import { TextGradientProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/TextGradient',
  component: TextGradient,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'text' },
  }
} as ComponentMeta<typeof TextGradient>

const defaultArgs: Partial<TextGradientProps> = {
  children: 'Aleph.im',
  type: 'h1',
  color: 'main0',
  size: undefined,
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=2%3A2118&t=XeMPIFw7c4dnGQr1-0',
  }
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof TextGradient> = (args: TextGradientProps) => <TextGradient {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

export const Custom = Template.bind({})
Custom.args = {
  ...defaultArgs,
  type: 'body',
  color: 'main1'
}
Custom.parameters = {
  ...defaultParams,
}
