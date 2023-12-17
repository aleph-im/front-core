import React from 'react'
import { StoryFn } from '@storybook/react'
import RouterNavbar from './cmp'
import { RouterNavbarProps } from './types'
import NavbarLink from '../NavbarLink'

export default {
  title: 'Components/UI/modules/RouterNavbar',
  component: RouterNavbar,
  subcomponents: { NavbarLink },
}

const defaultArgs: Partial<RouterNavbarProps> = {
  breakpoint: 'md',
  pathname: '/earn/staking',
  routes: [
    {
      name: 'Earn',
      href: '/earn',
      icon: 'earn',
      children: [
        {
          name: 'Staking',
          href: '/earn/staking',
          icon: 'earn',
          flag: 1,
        },
        {
          name: 'Core nodes',
          href: '/earn/ccn',
          icon: 'ccn',
          flag: 2,
        },
        {
          name: 'Compute nodes',
          href: '/earn/crn',
          icon: 'crn',
          flag: 3,
        },
      ],
    },
    {
      name: 'Console',
      icon: 'console',
      href: 'https://console.aleph.im/',
      target: '_blank',
      external: true,
    },
    {
      name: 'Explorer',
      icon: 'explore',
      href: 'https://explorer.aleph.im/',
      target: '_blank',
      external: true,
    },
    {
      name: 'Swap',
      icon: 'swap',
      href: 'https://swap.aleph.im/',
      target: '_blank',
      external: true,
    },
  ],
  Link: (props) => <a {...props} />,
}

// ---

const Template: StoryFn<typeof RouterNavbar> = (args) => {
  return (
    <>
      <RouterNavbar {...args} />

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
