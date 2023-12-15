import React from 'react'
import { StoryFn } from '@storybook/react'
import Icon from './cmp'
import { IconProps } from './types'

export default {
  title: 'Components/UI/common/Icon',
  component: Icon,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'inline-radio' },
    },
  },
}

const defaultArgs: Partial<IconProps> = {
  name: 'bitcoin',
  prefix: 'fab',
  color: '#f7931a',
  size: 'lg',
}

const defaultParams = {}

// ---

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
