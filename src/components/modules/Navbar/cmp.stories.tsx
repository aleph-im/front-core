import React, { useCallback, useState } from 'react'
import { StoryFn } from '@storybook/react'
import Navbar from './cmp'
import { NavbarProps } from './types'
import NavbarLink from '../NavbarLink'
import NavbarLinkList from '../NavbarLinkList'
import Logo from '../../common/Logo'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export default {
  title: 'Components/UI/modules/Navbar',
  component: Navbar,
  subcomponents: { NavbarLink },
}

const defaultArgs: Partial<NavbarProps> = {
  breakpoint: 'md',
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
  <Button as="button" variant="secondary" color="main0" size="md">
    Whitepaper
  </Button>,
]
/* eslint-enable react/jsx-key */

const Template: StoryFn<typeof Navbar> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const { breakpoint } = args

  return (
    <>
      <Navbar
        {...args}
        logo={<Logo />}
        open={isOpen}
        onToggle={handleToggleOpen}
        mobileTopContent={
          <NavbarLinkList
            onlyMobile
            mobileDirection="row"
            breakpoint={breakpoint}
          >
            <Button color="main0" variant="secondary" size="md">
              <Icon name="comet" />
            </Button>
          </NavbarLinkList>
        }
      >
        <NavbarLinkList
          withSlash
          collapsible="xl"
          onClick={handleCloseMenu}
          breakpoint={breakpoint}
        >
          {navLinks.map((link, i) => (
            <NavbarLink key={i} breakpoint={breakpoint}>
              {link}
            </NavbarLink>
          ))}
        </NavbarLinkList>
        <NavbarLinkList mobileDirection="row">
          {navButtons.map((link, i) => (
            <NavbarLink key={i}>{link}</NavbarLink>
          ))}
        </NavbarLinkList>
      </Navbar>

      <h1>A random title</h1>

      {Array.from({ length: 200 }, (_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis
          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit
          aperiam qui, optio laboriosam animi labore repudiandae incidunt
          excepturi sint tempore accusamus.
        </p>
      ))}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  controls: { exclude: ['color', 'size'] },
}
