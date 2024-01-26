import React, { useState } from 'react'
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
      name: 'Account',
      href: '/',
      icon: 'earn',
      children: [
        {
          name: 'Earn',
          href: '/earn',
          icon: 'earn',
          flag: 6,
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
  const [open, setOpen] = useState<boolean>()

  return (
    <>
      <RouterNavbar {...{ ...args, open, onToggle: setOpen }} />

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

export const NestedRoutes = Template.bind({})
NestedRoutes.args = {
  ...defaultArgs,
  pathname: '/computing/instance',
  routes: [
    {
      name: 'Console',
      href: '/',
      icon: 'console',
      children: [
        {
          name: 'Solutions',
          href: '/solutions',
          children: [
            {
              name: 'Dashboard',
              href: '/solutions/dashboard',
            },
          ],
        },
        {
          name: 'Computing',
          href: '/computing',
          children: [
            {
              name: 'Functions',
              href: '/computing/function',
            },
            {
              name: 'Instances',
              href: '/computing/instance',
            },
            {
              name: 'Confidential',
              href: '/computing/confidential',
            },
          ],
        },
        {
          name: 'Storage',
          href: '/storage',
          children: [
            {
              name: 'Inmutable volumes',
              href: '/storage/volume',
            },
          ],
        },
        {
          name: 'Tools',
          href: '#',
          children: [
            {
              name: 'VRF',
              href: 'https://medium.com/aleph-im/aleph-im-verifiable-random-function-vrf-b03544a7e904',
              external: true,
            },
            {
              name: 'Indexing framework',
              href: 'https://docs.aleph.im/tools/indexer/',
              external: true,
            },
          ],
        },
        {
          name: 'Configure',
          href: '/configure',
          children: [
            {
              name: 'Secrets',
              href: '/configure/ssh',
            },
            {
              name: 'Custom domains',
              href: '/configure/domain',
            },
          ],
        },
      ],
    },
    {
      name: 'Account',
      icon: 'profile',
      href: 'https://account.aleph.im/',
      target: '_blank',
      external: true,
      disabled: true,
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
}
NestedRoutes.parameters = {
  controls: { exclude: ['color', 'size'] },
}

export const NestedExactPath = Template.bind({})
NestedExactPath.args = {
  ...defaultArgs,
  pathname: '/tools/init',
  routes: [
    {
      name: 'Root',
      href: '/',
      icon: 'console',
      children: [
        {
          name: 'Nested Root',
          href: '/',
          exact: true,
        },
        {
          name: 'Tools',
          href: '/tools',
          children: [
            {
              name: 'Init tool',
              href: '/tools/init',
              external: true,
              exact: true,
            },
            {
              name: 'Indexing framework',
              href: 'https://docs.aleph.im/tools/indexer/',
              external: true,
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      name: 'Account',
      icon: 'profile',
      href: 'https://account.aleph.im/',
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
}
NestedExactPath.parameters = {
  controls: { exclude: ['color', 'size'] },
}

export const NestedExactFalsePath = Template.bind({})
NestedExactFalsePath.args = {
  ...defaultArgs,
  pathname: '/tools',
  routes: [
    {
      name: 'Root',
      href: '/',
      icon: 'console',
      exact: true,
    },
    {
      name: 'Tools',
      href: '/tools',
      children: [
        {
          name: 'Init tool',
          href: '/tools',
        },
        {
          name: 'Indexing framework',
          href: 'https://docs.aleph.im/tools/indexer/',
          external: true,
        },
      ],
    },
    {
      name: 'Account',
      icon: 'profile',
      href: 'https://account.aleph.im/',
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
}
NestedExactFalsePath.parameters = {
  controls: { exclude: ['color', 'size'] },
}
