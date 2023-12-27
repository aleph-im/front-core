import React from 'react'
import { StoryFn } from '@storybook/react'
import { NodeName, NodeNameProps } from './cmp'

export default {
  title: 'Components/UI/nodes/NodeName',
  component: NodeName,
}

const defaultArgs: Partial<NodeNameProps> = {
  hash: 'alskdhaksjn',
  name: 'Node name',
  picture: '65e0eafc2d2a5350c2e4be794c3faa01b2d9e7ed28104d92a8b9b2dd7ddc6f37',
  apiServer: 'https://api2.aleph.im',
}

// ---

const Template: StoryFn<typeof NodeName> = (args: any) => <NodeName {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
