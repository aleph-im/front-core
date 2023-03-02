import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Navbar from './cmp'
import { NavbarProps } from './types'
import Button from '../Button'

export default {
  title: 'Components/UI/Navbar',
  component: Navbar,
  decorators: [withDesign],
} as ComponentMeta<typeof Navbar>

const defaultArgs: Partial<NavbarProps> = {
  withLabel: true,
  withLogo: true,
}

// ---

// @note: This is a workaround to avoid a missing key error
// Since key is injected directly in mounted component
// Possible solution: pass links and buttons as a single React Fragment that will be iterated on

/* eslint-disable react/jsx-key */
const navLinks = [
  <a href="#">Solutions</a>,
  <a href="#">Indexing</a>,
  <a href="#">Roadmap</a>,
  <a href="#">Insights</a>,
  <a href="#">Team</a>,
]
const navButtons = [
  <Button as="button" variant="secondary" color="main0" kind="neon" size="regular">
    Whitepaper
  </Button>
]
/* eslint-enable react/jsx-key */

const Template: ComponentStory<typeof Navbar> = (args) => (
  <>
    <Navbar {...args} navLinks={navLinks} navButtons={navButtons} />

    <h1>A random title</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit aperiam qui, optio laboriosam animi labore repudiandae incidunt excepturi sint tempore accusamus.</p>
  </>
)

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'size'] },
}
