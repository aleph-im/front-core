import React, { useState } from 'react'
import { StoryFn } from '@storybook/react'

import Modal from './cmp'
import { ModalProps } from './types'
import ModalCard from '../ModalCard'
import Button from '../Button'

export default {
  title: 'Components/UI/common/Modal',
  component: Modal,
  subcomponents: { ModalCard },
}

export type Args = Partial<ModalProps>

const defaultArgs: Args = {
  title: 'Title',
  text: 'Content',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <div tw="flex flex-col items-start gap-4">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        footer={new Date().toISOString()}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

// ---

const CustomClosingTemplate: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <div tw="flex flex-col items-start gap-4">
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Close Modal</Button>}
      />
    </div>
  )
}

export const DisableClickOutside = CustomClosingTemplate.bind({})
DisableClickOutside.args = {
  ...defaultArgs,
  closeOnClickOutside: false,
}
DisableClickOutside.parameters = {
  ...defaultParams,
}

export const DisableCloseButton = CustomClosingTemplate.bind({})
DisableCloseButton.args = {
  ...defaultArgs,
  closeOnCloseButton: false,
}
DisableCloseButton.parameters = {
  ...defaultParams,
}

export const DisableBoth = CustomClosingTemplate.bind({})
DisableBoth.args = {
  ...defaultArgs,
  closeOnClickOutside: false,
  closeOnCloseButton: false,
}
DisableBoth.parameters = {
  ...defaultParams,
}
