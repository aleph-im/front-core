import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import RouterSidebar from './cmp'
import { RouterSidebarProps } from './types'

export default {
  title: 'Components/UI/modules/RouterSidebar',
  component: RouterSidebar,
}

const defaultArgs: Partial<RouterSidebarProps> = {
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
          flag: 5,
          children: [
            {
              name: 'Staking',
              href: '/earn/staking',
              icon: 'earn',
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
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      icon: 'console',
      href: 'https://console.aleph.im/',
      target: '_blank',
      external: true,
    },
    {
      icon: 'explore',
      href: 'https://explorer.aleph.im/',
      target: '_blank',
      external: true,
    },
    {
      icon: 'swap',
      href: 'https://swap.aleph.im/',
      target: '_blank',
      external: true,
    },
  ],
  Link: (props) => <a {...props} />,
}

// ---

const Template: StoryFn<typeof RouterSidebar> = (args) => {
  const [open, setOpen] = useState<boolean>()

  return (
    <div tw="h-[1100px]">
      <RouterSidebar {...{ ...args, open, onToggle: setOpen }} />

      {/* <h1>A random title</h1>

      {Array.from({ length: 200 }, (_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis
          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit
          aperiam qui, optio laboriosam animi labore repudiandae incidunt
          excepturi sint tempore accusamus.
        </p>
      ))} */}
    </div>
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
              icon: 'console',
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

// --------------------------------

const LockedTemplate: StoryFn<typeof RouterSidebar> = (args) => {
  return (
    <div tw="h-[1100px]">
      <RouterSidebar {...args} />
    </div>
  )
}

export const Locked = LockedTemplate.bind({})
Locked.args = {
  ...defaultArgs,
  open: true,
  onToggle: undefined,
}
Locked.parameters = {
  controls: { exclude: ['color', 'size'] },
}
