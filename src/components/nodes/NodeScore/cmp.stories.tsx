import React from 'react'
import { StoryFn } from '@storybook/react'
import { NodeScore, NodeScoreProps } from './cmp'

export default {
  title: 'Components/UI/nodes/NodeScore',
  component: NodeScore,
}

const defaultArgs: Partial<NodeScoreProps> = {
  score: 0.6,
  showPercentage: true,
}

// ---

const Template: StoryFn<typeof NodeScore> = (args: any) => (
  <NodeScore {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
