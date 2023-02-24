import React, {useState} from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Tabs from './cmp'
import { TabsProps } from './types'

export default {
  title: 'Components/UI/Tabs',
  component: Tabs,
  decorators: [withDesign],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Tabs>

const defaultArgs: Partial<TabsProps> = {
  defaultSelected: 2
}


const tabs = [
  {
    name: 'General',
    component: (
      <div>
        <h1>General</h1>
        <p>
          This section contains settings related to your account information,
          such as your name, email address, and profile picture. You can also
          manage your notification preferences and language settings here.
        </p>
      </div>
    ),
  },
  {
    name: 'Security',
    component: (
      <div>
        <h1>Security</h1>
        <p>
          Here you can manage the security settings for your account, including
          your password, two-factor authentication, and connected devices. You
          can also view a log of recent account activity to help you stay on top
          of any suspicious behavior.
        </p>
      </div>
    ),
  },
  {
    name: 'Billing',
    component: (
      <div>
        <h1>Billing</h1>
        <p>
          This section allows you to manage your subscription and payment
          information, view your billing history, and update your billing
          preferences. You can also manage any additional services or add-ons
          that you&#39;ve subscribed to.
        </p>
      </div>
    ),
    label: 'NEW',
  },
  {
    name: 'Notifications',
    component: <div />,
    disabled: true,
    label: 'SOON',
  },
]

// ---

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [state, setState] = useState<{ prevTab?: number, nextTab?: number }>({
    prevTab: undefined,
    nextTab: undefined,
  })

  return (
  <>
    <Tabs {...args} tabs={tabs} onTabChange={(prevTab, nextTab) => setState({prevTab, nextTab})} />

    { (state.prevTab !== null && state.nextTab !== null) &&
      <p>Switched from tab { state.prevTab } to { state.nextTab }</p>
    }
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