import React from 'react'
import { StoryFn } from '@storybook/react'

import NoisyContainer from './cmp'
import { NoisyContainerProps } from './types'

export default {
  title: 'Components/UI/forms/NoisyContainer',
  component: NoisyContainer,
}

const defaultArgs: Partial<NoisyContainerProps> = {
  $type: 'noise-base',
  children: 'content',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof NoisyContainer> = (args) => (
  <NoisyContainer {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
