import React from 'react'
import { StoryFn } from '@storybook/react'
import ColorDot from './cmp'
import { ColorDotProps } from './index'

export default {
  title: 'Components/UI/nodes/ColorDot',
  component: ColorDot,
}

const defaultArgs: Partial<ColorDotProps> = {
  $color: 'main1',
  $gradient: 'main2',
  $size: '2rem',
}

// ---

const Template: StoryFn<typeof ColorDot> = (args: any) => <ColorDot {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
