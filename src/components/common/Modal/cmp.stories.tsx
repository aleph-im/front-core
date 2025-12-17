import React, { useCallback } from 'react'
import { StoryFn } from '@storybook/react'

import Modal from './cmp'
import { ModalProps } from './types'
import ModalCard from '../ModalCard'
import { OpenModalInfo, useModal } from './context'
import Button from '../Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Modal',
  component: Modal,
  subcomponents: { ModalCard },
}

export type Args = Partial<ModalProps> & Partial<OpenModalInfo>

const defaultArgs: Args = {
  title: 'Title',
  text: 'Content',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const ConsumerComponent = ({ title, text }: Args) => {
  const modal = useModal()

  const handleOpen = useCallback(() => {
    if (!modal) return

    modal.open({
      title,
      text,
      footer: new Date().toISOString(),
    })
  }, [modal, title, text])

  const handleClose = useCallback(() => {
    if (!modal) return

    modal.close()
  }, [modal])

  return (
    <div tw="flex flex-col items-start gap-4">
      <button onClick={handleOpen}>Open Modal</button>
      <button onClick={handleClose}>Close Modal</button>
    </div>
  )
}

const Template: StoryFn<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <ConsumerComponent {...args} />
    </Modal>
  )
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
Default.parameters = {
  ...defaultParams,
}

const CustomClosingConsumerComponent = ({
  title,
  text,
  closeOnClickOutside,
  closeOnCloseButton,
}: Args) => {
  const modal = useModal()

  const handleClose = useCallback(() => {
    if (!modal) return

    modal.close()
  }, [modal])

  const handleOpen = useCallback(() => {
    if (!modal) return

    modal.open({
      title,
      text,
      footer: <Button onClick={handleClose}>Close Modal</Button>,
      closeOnClickOutside,
      closeOnCloseButton,
    })
  }, [modal, title, text, closeOnClickOutside, closeOnCloseButton, handleClose])

  return (
    <div tw="flex flex-col items-start gap-4">
      <button onClick={handleOpen}>Open Modal</button>
    </div>
  )
}

const CustomClosingTemplate: StoryFn<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <CustomClosingConsumerComponent {...args} />
    </Modal>
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
