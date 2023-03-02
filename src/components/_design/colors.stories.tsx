import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components'

export default {
  title: 'Design/Atoms/Colors',
  decorators: [withDesign],
} as ComponentMeta<any>

const defaultArgs: Partial<any> = {}

const defaultParams = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A115&t=OG6V4eRdvQIurCbK-0',
  },
}

// ---

const Circle = styled.div`
  width: 160px;
  height: 160px;
  font-size: 160px;
  border-radius: 50%;
  margin: 10px 12px;
  display: inline-block;
`

const Rect = styled.div`
  width: 624px;
  height: 173px;
  margin: 10px 12px;
`

const ColorsTemplate: ComponentStory<any> = (args) => {
  return (
    <>
      <h1>Colors</h1>
      <div>
        <h3>Base</h3>
        <Circle className="bg-base0"></Circle>
        <Circle
          className="bg-base1"
          style={{ border: '1px solid #FFFFFF' }}
        ></Circle>
        <Circle className="bg-base2"></Circle>
      </div>
      <div>
        <h3>Flat-main</h3>
        <Circle className="bg-main0"></Circle>
        <Circle className="bg-main1"></Circle>
        <Circle className="bg-main2"></Circle>
      </div>
      <div>
        <h3>Gradient-main</h3>
        <Circle className="gr-main0"></Circle>
        <Circle className="gr-main1"></Circle>
        <Circle className="gr-main2"></Circle>
      </div>
      <div>
        <h3>Gradient-extra</h3>
        <Circle className="gr-extra0"></Circle>
        <Circle className="gr-extra1"></Circle>
      </div>
      <h1>Effects</h1>
      <div>
        <h3>Glow-MAX</h3>
        <Circle className="gr-main0 fx-glow-max-main0"></Circle>
        <Circle className="gr-main1 fx-glow-max-main1"></Circle>
        <Circle className="gr-main2 fx-glow-max-main2"></Circle>
      </div>
      <div>
        <h3>Glow-MAX-extras</h3>
        <Circle className="gr-extra0 fx-glow-max-extra0"></Circle>
        <Circle className="gr-extra1 fx-glow-max-extra1"></Circle>
      </div>
      <div>
        <h3>Glow-MIN</h3>
        <Circle className="gr-main0 fx-glow-min-main0"></Circle>
        <Circle className="gr-main1 fx-glow-min-main1"></Circle>
        <Circle className="gr-main2 fx-glow-min-main2"></Circle>
      </div>
      <div>
        <h3>Glow-hover</h3>
        <Circle className="gr-main0 fx-glow-hover-main0"></Circle>
        <Circle className="gr-main1 fx-glow-hover-main1"></Circle>
        <Circle className="gr-main2 fx-glow-hover-main2"></Circle>
      </div>
      <div>
        <h3>Glass</h3>
        <Circle className="fx-glass-main0"></Circle>
        <Circle className="fx-glass-main1"></Circle>
        <Circle className="fx-glass-main2"></Circle>
        <Circle className="fx-glass-base0"></Circle>
        <Circle className="fx-glass-base1"></Circle>
        <Circle className="fx-glass-base2"></Circle>
      </div>
      <div>
        <h3>Glass-colored</h3>
        <Circle className="fx-glass-colored0"></Circle>
      </div>
      <div>
        <h3>dark-hover</h3>
        <Circle className="fx-dark-main0"></Circle>
      </div>
      <div>
        <h3>Noise (plain)</h3>
        <Rect className="fx-noise-base"></Rect>
        <Rect className="fx-noise-dark"></Rect>
        <Rect className="fx-noise-light"></Rect>
      </div>
      <div>
        <h3>Noise (gradient)</h3>
        <Circle className="fx-noise-main0"></Circle>
        <Circle className="fx-noise-main1"></Circle>
        <Circle className="fx-noise-main2"></Circle>
      </div>
    </>
  )
}

export const Colors = ColorsTemplate.bind({})
Colors.args = {
  ...defaultArgs,
}
Colors.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
