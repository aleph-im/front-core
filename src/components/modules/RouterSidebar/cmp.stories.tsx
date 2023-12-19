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
      name: 'Earn',
      href: '/earn',
      icon: 'earn',
      flag: 1,
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
    <div tw="h-[900px]">
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
