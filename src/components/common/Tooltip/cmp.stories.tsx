import React, { RefObject, useCallback, useRef, useState } from 'react'
import { StoryFn } from '@storybook/react'

import Tooltip from './cmp'
import { TooltipProps } from './types'
import styled from 'styled-components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/common/Tooltip',
  component: Tooltip,
}

const defaultArgs: Partial<TooltipProps> = {
  content: 'Information',
}

const defaultParams = {
  controls: { exclude: ['color', 'size'] },
}

// ---

const StyledContainer = styled.div`
  position: relative;
  padding: 10rem;
`

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  background-color: #ffffff1a;
  cursor: help;
`

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: StoryFn<typeof Tooltip> = (args) => {
  const targetRef: RefObject<HTMLDivElement> = useRef(null)
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => setOpen(!open), [open, setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])

  return (
    <StyledContainer>
      <StyledBox ref={targetRef}>Target</StyledBox>
      <Tooltip
        {...args}
        open={open}
        targetRef={targetRef}
        onCloseClick={handleClose}
      />
      <button onClick={handleClick} tw="mt-7">
        Open tooltip
      </button>
    </StyledContainer>
  )
}

const Template2: StoryFn<typeof Tooltip> = (args) => {
  return (
    <StyledContainer>
      <Tooltip {...args}>
        <StyledBox>Hover me</StyledBox>
      </Tooltip>
    </StyledContainer>
  )
}

export const Button = Template.bind({})
Button.args = {
  ...defaultArgs,
}
Button.parameters = {
  ...defaultParams,
}

// ---

export const Hover = Template2.bind({})
Hover.args = {
  ...defaultArgs,
}
Hover.parameters = {
  ...defaultParams,
}

// ---

const ScrollTemplate: StoryFn<typeof Tooltip> = (args) => {
  return (
    <div tw="overflow-auto h-80 bg-black px-6 py-20">
      <p tw="my-6">Scrollable container...</p>
      <Template {...args} />
    </div>
  )
}

// ---

export const Scroll = ScrollTemplate.bind({})
Scroll.args = {
  ...defaultArgs,
}
Scroll.parameters = {
  ...defaultParams,
}
