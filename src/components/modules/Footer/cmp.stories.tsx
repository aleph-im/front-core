import React from 'react'
import { StoryFn } from '@storybook/react'
import Footer from './cmp'
import { FooterProps } from './types'

export default {
  title: 'Components/UI/modules/Footer',
  component: Footer,
}

const defaultArgs: Partial<FooterProps> = {
  small: true,
  logoImg: 'aleph',
  logoByAleph: false,
  logoText: 'Aleph Cloud',
  buttons: [
    {
      label: 'Work with us',
      href: '#',
      props: {
        variant: 'primary',
      },
    },
    {
      label: 'Try our cloud',
      href: '#',
    },
    {
      label: 'Start a project',
      href: '#',
    },
  ],
  media: [
    {
      name: 'twitter',
      icon: 'twitter',
      label: 'Twitter',
      href: 'https://twitter.com/aleph_im',
      small: true,
    },
    {
      name: 'telegram',
      icon: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/alephim',
    },
    {
      name: 'medium',
      icon: 'medium',
      label: 'Medium',
      href: 'https://medium.com/aleph-im',
      small: true,
    },
  ],
  mainLinks: [
    {
      label: 'Documentation',
      href: 'https://docs.aleph.im',
    },
    {
      label: 'Telegram Developers',
      href: 'https://t.me/alephim',
    },
  ],
  links: [
    {
      title: 'Solutions',
      links: [
        {
          label: 'Computing',
          href: '#',
        },
        {
          label: 'Storage',
          href: '#',
        },
        {
          label: 'Custom domains',
          href: '#',
        },
        {
          label: 'SSH',
          href: '#',
        },
      ],
    },
    {
      title: 'Developers',
      links: [
        {
          label: 'Documentation',
          href: '#',
        },
        {
          label: 'Developer telegram',
          href: '#',
        },
        {
          label: 'Github',
          href: '#',
        },
        {
          label: 'SDK',
          href: '#',
        },
      ],
    },
    {
      title: 'Why twentysix',
      links: [
        {
          label: 'What is twentysix cloud?',
          href: '#',
        },
        {
          label: 'Choosing twentysix cloud',
          href: '#',
        },
        {
          label: 'Decentralized cloud solution',
          href: '#',
        },
        {
          label: 'What is decentralized cloud computing?',
          href: '#',
        },
      ],
    },
    {
      title: 'About',
      links: [
        {
          label: 'Media kit',
          href: '#',
        },
        {
          label: 'Aleph.cloud technology telegram',
          href: '#',
        },
      ],
    },
  ],
}

// ---

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {}
