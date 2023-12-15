import React from 'react'
import { StoryFn } from '@storybook/react'
import Sidebar from './cmp'
import { SidebarProps } from './types'

export default {
  title: 'Components/UI/modules/Sidebar',
  component: Sidebar,
}

const defaultArgs: Partial<SidebarProps> = {
  breakpoint: 'md',
  pathname: '/earn/staking',
  routes: [
    {
      name: 'EARN',
      path: '/earn',
      icon: 'earn',
      children: [
        {
          name: 'Staking',
          path: '/earn/staking',
          icon: 'earn',
          flag: 1,
        },
        {
          name: 'Core nodes',
          path: '/earn/ccn',
          icon: 'ccn',
          flag: 2,
        },
        {
          name: 'Compute nodes',
          path: '/earn/crn',
          icon: 'crn',
          flag: 3,
        },
      ],
    },
  ],
  Link: (props) => <div>{props.children}</div>,
}

// ---

const Template: StoryFn<typeof Sidebar> = (args) => {
  return (
    <div tw="h-[900px]">
      <Sidebar {...args} />

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
