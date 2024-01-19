import React from 'react'
import { StoryFn } from '@storybook/react'

import NoisyContainer from './cmp'
import { NoisyContainerProps } from './types'

export default {
  title: 'Components/UI/forms/NoisyContainer',
  component: NoisyContainer,
}

const defaultArgs: Partial<NoisyContainerProps> = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
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
