import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'
import Tabs from './cmp'
import { StyledTabType, TabsProps, Tab } from './types'

export default {
  title: 'Components/UI/Tabs',
  component: Tabs,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
  },
}

const defaultArgs: Partial<TabsProps & StyledTabType> = {
  defaultSelected: 'billing',
  align: 'center',
}

const tabs: Tab[] = [
  {
    id: 'general',
    name: 'General',
  },
  {
    id: 'security',
    name: 'Security -  really long title',
    label: {
      label: '(3)',
      position: 'bottom',
    },
  },
  {
    id: 'billing',
    name: 'Billing',
    label: 'NEW',
  },
  {
    id: 'notifications',
    name: 'Notifications',
    disabled: true,
    label: 'SOON',
  },
]

// ---

const Template: StoryFn<typeof Tabs> = (args) => {
  const [tabId, setTabId] = useState<string | undefined>(args.defaultSelected)

  return (
    <>
      <Tabs {...args} tabs={tabs} onTabChange={(tabId) => setTabId(tabId)} />
      <div role="tabpanel" tw="p-10">
        {tabId === 'general' ? (
          <div>
            <h1>General</h1>
            <p>
              This section contains settings related to your account
              information, such as your name, email address, and profile
              picture. You can also manage your notification preferences and
              language settings here.
            </p>
          </div>
        ) : tabId === 'security' ? (
          <div>
            <h1>Security</h1>
            <p>
              Here you can manage the security settings for your account,
              including your password, two-factor authentication, and connected
              devices. You can also view a log of recent account activity to
              help you stay on top of any suspicious behavior.
            </p>
          </div>
        ) : tabId === 'billing' ? (
          <div>
            <h1>Billing</h1>
            <p>
              This section allows you to manage your subscription and payment
              information, view your billing history, and update your billing
              preferences. You can also manage any additional services or
              add-ons that you&#39;ve subscribed to.
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
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
