import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Breadcrumb from './cmp'
import { BreadcrumbProps } from './types'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Breadcrumb',
  component: Breadcrumb,
  decorators: [withDesign],
} as ComponentMeta<typeof Breadcrumb>

const defaultArgs: Partial<BreadcrumbProps> = {}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

/* eslint-disable react/jsx-key */
const navLinks = [
  <a href="#">Home</a>,
  <a href="#">Services</a>,
  <a href="#">Cloud Storage</a>,
]
/* eslint-enable react/jsx-key */

// ---

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
    <Breadcrumb {...args} navLinks={navLinks} />
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---