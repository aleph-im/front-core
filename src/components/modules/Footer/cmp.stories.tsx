import React from 'react'
import { StoryFn } from '@storybook/react'
import Footer from './cmp'
import { FooterProps } from './types'

export default {
  title: 'Components/UI/modules/Footer',
  component: Footer,
}

const defaultArgs: Partial<FooterProps> = {
  small: true,
}

// ---

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
