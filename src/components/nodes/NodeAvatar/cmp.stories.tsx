import React from 'react'
import { StoryFn } from '@storybook/react'
import { NodeAvatar, NodeAvatarProps } from './cmp'

export default {
  title: 'Components/UI/nodes/NodeAvatar',
  component: NodeAvatar,
}

const defaultArgs: Partial<NodeAvatarProps> = {
  apiServer: 'https://api2.aleph.im',
  picture: '65e0eafc2d2a5350c2e4be794c3faa01b2d9e7ed28104d92a8b9b2dd7ddc6f37',
  size: 'lg',
  ImageCmp: (props) => <img {...props} />,
}

// ---

const Template: StoryFn<typeof NodeAvatar> = (args: any) => (
  <NodeAvatar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'Image'] },
}
