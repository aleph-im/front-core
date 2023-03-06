import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Tag from './cmp'
import { TagProps } from './types'

export default {
  title: 'Components/UI/Tag',
  component: Tag,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'text' },
  }
} as ComponentMeta<typeof Tag>

const defaultArgs: Partial<TagProps> = {
  children: 'tagg',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=56%3A1536&t=TQzmyGUOR2LQj0uS-0',
  }
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof Tag> = (args: TagProps) => <Tag {...args} />

// ---

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
  controls: { include: ['children'], hideNoControlsWarning: true },
}
