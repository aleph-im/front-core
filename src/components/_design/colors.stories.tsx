import React from 'react'
import { StoryFn } from '@storybook/react'
import styled, { useTheme } from 'styled-components'
import { StoryBookHeader } from './utils'

export default {
  title: 'Design/Atoms/Colors',
}

const defaultArgs: Partial<any> = {}

const defaultParams = {}

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

const ColorsTemplate: StoryFn<any> = () => {
  const theme = useTheme()

  return (
    <>
      <StoryBookHeader>Colors</StoryBookHeader>
      <div>
        <h3>Base</h3>
        <Circle className="bg-base0"></Circle>
        <Circle
          className="bg-base1 text-text"
          style={{ border: `0.0625rem solid ${theme.color.text}` }}
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
      {theme.name === 'aleph' && (
        <>
          <StoryBookHeader>Effects</StoryBookHeader>
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
            <div>
              <Circle className="fx-glass-main0"></Circle>
              <Circle className="fx-glass-main1"></Circle>
              <Circle className="fx-glass-main2"></Circle>
            </div>
            <div>
              <Circle className="fx-glass-base0 fx-glass-border-base0"></Circle>
              <Circle className="fx-glass-base0 fx-glass-border-base1"></Circle>
              <Circle className="fx-glass-base1"></Circle>
              <Circle className="fx-glass-base2"></Circle>
            </div>
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
      )}
      <div>
        <h3>Functional</h3>
        <Circle className="bg-info"></Circle>
        <Circle className="bg-success"></Circle>
        <Circle className="bg-warning"></Circle>
        <Circle className="bg-error"></Circle>
        <Circle className="bg-disabled"></Circle>
      </div>
      <div>
        <Circle className="gr-info"></Circle>
        <Circle className="gr-success"></Circle>
        <Circle className="gr-warning"></Circle>
        <Circle className="gr-error"></Circle>
        <Circle className="gr-disabled"></Circle>
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
