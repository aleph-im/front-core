import React from 'react'
import { StoryFn } from '@storybook/react'
import { Avatar, AvatarProps } from './cmp'

export default {
  title: 'Components/UI/common/Avatar',
  component: Avatar,
}

const defaultArgs: Partial<AvatarProps> = {
  color: 'color1',
}

// ---

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
