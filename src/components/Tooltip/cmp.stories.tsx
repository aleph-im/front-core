import React, { RefObject, useCallback, useRef, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import Tooltip from './cmp'
import { TooltipProps } from './types'
import styled from 'styled-components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  decorators: [withDesign],
} as ComponentMeta<typeof Tooltip>

const defaultArgs: Partial<TooltipProps> = {
  header: 'Information',
}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/qNnjyRzhXcmj6nwbL9XP5K/ALEPH-Cloud-Website?node-id=1014-24275&t=SEs84rh4AUJZlD5O-0',
  },
  controls: { exclude: ['color', 'size'] },
}

// ---

const StyledContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
`

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  background-color: #ffffff1A;
  cursor: help;
`


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const Template: ComponentStory<typeof Tooltip> = (args) => {
  const targetRef: RefObject<HTMLDivElement> = useRef(null)
  const [open, setOpen] = useState(false)
  const handleClick = useCallback(() => setOpen(!open), [open, setOpen])
  const handleClose = useCallback(() => setOpen(false), [setOpen])

  return (
    <StyledContainer>
      <StyledBox ref={targetRef}>Target</StyledBox>
      <Tooltip {...args} open={open} targetRef={targetRef} onClose={handleClose} />
      <button onClick={handleClick} className="mt-xl">Open tooltip</button>
    </StyledContainer>
  )
}

const Template2: ComponentStory<typeof Tooltip> = (args) => {
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
