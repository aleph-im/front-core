import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import RouterSidebar from './cmp'
import { RouterSidebarProps } from './types'
import { Route } from '../../../types'

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

const nestedRoutes: Route[] = [
  {
    name: 'Console',
    href: '/',
    icon: 'console',
    children: [
      {
        name: 'Solutions',
        href: '/',
        exact: true,
        children: [
          {
            name: 'Dashboard',
            href: '/',
            exact: true,
            icon: 'dashboard',
          },
          {
            name: 'Settings',
            href: '/settings',
            exact: true,
            icon: 'settings',
          },
          {
            name: 'Web3 Hosting',
            href: '/hosting',
            icon: 'web3HostingBox',
            children: [
              {
                name: 'Manage your website',
                href: '/hosting/website',
                icon: 'manageWebsite',
              },
            ],
          },
          {
            name: 'Computing',
            href: '/computing',
            icon: 'computeSolutions',
            children: [
              {
                name: 'Functions',
                href: '/computing/function',
                icon: 'functions',
              },
              {
                name: 'Instances',
                href: '/computing/instance',
                icon: 'instance',
              },
              {
                name: 'Confidential',
                href: '/computing/confidential',
                disabled: true,
                label: '(SOON)',
                icon: 'confidential',
              },
            ],
          },
          {
            name: 'Storage',
            href: '/storage',
            icon: 'storageSolutions',
            children: [
              {
                name: 'Volumes',
                href: '/storage',
                icon: 'storageSolutions',
              },
            ],
          },
          {
            name: 'Tools',
            href: '#',
            icon: 'console',
            children: [
              {
                name: 'VRF',
                href: 'https://medium.com/aleph-im/aleph-im-verifiable-random-function-vrf-b03544a7e904',
                external: true,
                highlighted: true,
                target: '_blank',
                icon: 'arrow-up-right-from-square',
              },
              {
                name: 'Indexer Framework',
                href: 'https://docs.aleph.im/tools/indexer/',
                external: true,
                highlighted: true,
                target: '_blank',
                icon: 'arrow-up-right-from-square',
              },
            ],
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
]

const ViewportBox = ({
  children,
  height = '1100px',
}: {
  children: React.ReactNode
  height?: string
}) => (
  <div style={{ height }} tw="flex overflow-hidden">
    {children}
    <div tw="flex flex-col flex-1 overflow-x-hidden overflow-y-auto px-8 py-4 ">
      <h1>A random title</h1>

      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error debitis
          ullam voluptate necessitatibus? Quod debitis autem eveniet suscipit
          aperiam qui, optio laboriosam animi labore repudiandae incidunt
          excepturi sint tempore accusamus.
        </p>
      ))}
    </div>
  </div>
)

// ---

const Template: StoryFn<typeof RouterSidebar> = (args) => {
  const [open, setOpen] = useState<boolean>()

  return (
    <ViewportBox>
      <RouterSidebar {...{ ...args, open, onToggle: setOpen }} />
    </ViewportBox>
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
  routes: nestedRoutes,
}
NestedRoutes.parameters = {
  controls: { exclude: ['color', 'size'] },
}

// --------------------------------

const ShortScreenTemplate: StoryFn<typeof RouterSidebar> = (args) => {
  const [open, setOpen] = useState<boolean>()

  return (
    <ViewportBox height="500px">
      <RouterSidebar {...{ ...args, open, onToggle: setOpen }} />
    </ViewportBox>
  )
}

export const ShortScreen = ShortScreenTemplate.bind({})
ShortScreen.args = {
  ...defaultArgs,
  pathname: '/computing/instance',
  routes: nestedRoutes,
}
ShortScreen.parameters = {
  controls: { exclude: ['color', 'size'] },
}

// --------------------------------

const LockedTemplate: StoryFn<typeof RouterSidebar> = (args) => {
  return (
    <ViewportBox>
      <RouterSidebar {...args} onToggle={undefined} />
    </ViewportBox>
  )
}

export const Locked = LockedTemplate.bind({})
Locked.args = {
  ...defaultArgs,
}
Locked.parameters = {
  controls: { exclude: ['color', 'size'] },
}
