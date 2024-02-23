import React from 'react'
import { StoryFn } from '@storybook/react'

import Price from './cmp'
import { PriceProps } from './types'

export default {
  title: 'Components/UI/common/Price',
  component: Price,
  argTypes: {
    size: { control: 'text' },
    id: { control: 'select' },
  },
}

const defaultArgs: Partial<PriceProps> = {
  value: 1_000_000,
}

const defaultParams = {}

// ---

const Template: StoryFn<typeof Price> = (args) => <Price {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}
