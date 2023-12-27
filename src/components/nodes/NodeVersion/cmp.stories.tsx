import React from 'react'
import { StoryFn } from '@storybook/react'
import { NodeVersion, NodeVersionProps } from './cmp'

export default {
  title: 'Components/UI/nodes/NodeVersion',
  component: NodeVersion,
}

const defaultArgs: Partial<NodeVersionProps> = {
  version: '2.0.1',
  lastVersion: {
    latest: '2.0.0',
    prerelease: '2.0.1',
    outdated: '1.0.0',
  },
}

// ---

const Template: StoryFn<typeof NodeVersion> = (args: any) => (
  <NodeVersion {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
