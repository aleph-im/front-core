import React from 'react'
import { StoryFn } from '@storybook/react'
import { StoryBookHeader, StoryBookSubheader } from './utils'
import { getThemeFamily } from '../../themes/utils'
import styled, { useTheme } from 'styled-components'
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
  const theme = useTheme()

  const fontName = getThemeFamily(theme.name) === 'aleph' ? 'Rubik' : 'RIGID SQUARE'

  return (
    <div>
      <StoryBookHeader>Typography</StoryBookHeader>
      <div>
        <StoryBookSubheader>Headers</StoryBookSubheader>
        <StyledBlock>
          <h1>H1 - {fontName} - headers</h1>
          <h2>H2 - {fontName} - headers</h2>
          <h3>H3 - {fontName} - headers</h3>
          <h4>H4 - {fontName} - headers</h4>
          <h5>H5 - {fontName} - headers</h5>
          <h6>H6 - {fontName} - headers</h6>
          <span className="tp-h7">H7 - {fontName} - headers</span>

          <nav>NAVIGIATION - {fontName} - headers</nav>

          <span className="tp-info">SUPPERSCRIPT - info - title</span>
          <header>Article Header</header>
        </StyledBlock>
      </div>
      <div style={{ width: '860px' }}>
        <div>
          <StoryBookSubheader>Body text - Regular</StoryBookSubheader>
          <StyledBlock>
            <p className="tp-body fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body fs-10">
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
            <p className="tp-body1 fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body1 fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body1 fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body1 fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body1 fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body1 fs-10">
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
            <p className="tp-body2 fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body2 fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body2 fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body2 fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body2 fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body2 fs-10">
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
            <p className="tp-body3 fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body3 fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-body3 fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body3 fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-body3 fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-body3 fs-10">
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
            <p className="tp-code fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-code fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code fs-10">
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
            <p className="tp-code1 fs-28">
              28 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code1 fs-24">
              24 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="tp-code1 fs-18">
              18 - Base body text - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code1 fs-16">
              16 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris convallis, quam quis vehicula pulvinar, nisl elit finibus
              sem, quis aliquam arcu massa finibus arcu. Mauris pretium
              fermentum semper.
            </p>
            <p className="tp-code1 fs-12">
              12 - LEGAL TEXT - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris convallis, quam quis vehicula pulvinar,
              nisl elit finibus sem, quis aliquam arcu massa finibus arcu.
              Mauris pretium fermentum semper.
            </p>
            <p className="tp-code1 fs-10">
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
