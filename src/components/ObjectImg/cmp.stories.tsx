import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import ObjectImg from './cmp'
import { ObjectImgProps } from './types'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/ObjectImg',
  component: ObjectImg,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'text' },
    id: { control: 'select' }
  }
} as ComponentMeta<typeof ObjectImg>

const defaultArgs: Partial<ObjectImgProps> = {
  id: 'Object1',
  size: '100px'
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A741&t=jFufZWoGIyZ8Gzf5-0',
  },
}

// ---

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof ObjectImg> = (args) => <ObjectImg {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
