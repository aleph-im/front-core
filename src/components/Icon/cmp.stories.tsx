import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Icon from './cmp'
import { IconProps } from './types'

export default {
  title: 'Components/UI/Icon',
  component: Icon,
  decorators: [withDesign],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Icon>

const defaultArgs: Partial<IconProps> = {
  name: 'bitcoin',
  prefix: 'fab',
  color: '#f7931a',
  size: 'lg',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A1705&t=jFufZWoGIyZ8Gzf5-0',
  },
}

// ---

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
