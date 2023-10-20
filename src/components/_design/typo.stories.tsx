import React from 'react'
import { StoryFn } from '@storybook/react'
import { StoryBookHeader, StoryBookSubheader } from './utils'
import styled from 'styled-components'
import tw from 'twin.macro'

export default {
  title: 'Design/Atoms/Typography',
}

const defaultArgs: Partial<any> = {}

const defaultParams = {}

// ---

const StyledBlock = styled.div`
  ${tw`flex flex-col gap-6`}
`

const TypographyTemplate: StoryFn<any> = () => {
  return (
    <div>
      <StoryBookHeader>Typography</StoryBookHeader>
      <div>
        <StoryBookSubheader>Headers</StoryBookSubheader>
        <StyledBlock>
          <h1>H1 - Rubik - headers</h1>
          <h2>H2 - Rubik - headers</h2>
          <h3>H3 - Rubik - headers</h3>
          <h4>H4 - Rubik - headers</h4>
          <h5>H5 - Rubik - headers</h5>
          <h6>H6 - Rubik - headers</h6>
          <span className="tp-h7">H7 - Rubik - headers</span>

          <nav>NAVIGIATION - Rubik - headers</nav>

          <span className="tp-info">SUPPERSCRIPT - info - title</span>
          <header>Article Header</header>
        </StyledBlock>
      </div>
      <div style={{ width: '860px' }}>
        <div>
          <StoryBookSubheader>Body text - Regular</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-body fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
        <div>
          <StoryBookSubheader>Body text - italic</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-body1 fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body1 fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body1 fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body1 fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body1 fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
        <div>
          <StoryBookSubheader>Body text - bold-italic</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-body2 fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body2 fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body2 fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body2 fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body2 fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
        <div>
          <StoryBookSubheader>Body text - bold-italic</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-body3 fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body3 fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body3 fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body3 fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body3 fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
        <div>
          <StoryBookSubheader>Embedded code - default</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-code fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-code fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
        <div>
          <StoryBookSubheader>Embedded code - bold</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-code1 fs-xl">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code1 fs-lg">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code1 fs-md">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code1 fs-sm">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-code1 fs-xs">
              10 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
          </StyledBlock>
        </div>
      </div>
    </div>
  )
}

export const Typography = TypographyTemplate.bind({})
Typography.args = {
  ...defaultArgs,
}
Typography.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
