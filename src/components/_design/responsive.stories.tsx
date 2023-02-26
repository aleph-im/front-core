import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { StoryBookHeader, StoryBookSubheader } from './utils'
import styled from 'styled-components'
import theme from '../../themes/base'

export default {
  title: 'Design/Atoms/Responsive',
  decorators: [withDesign],
} as ComponentMeta<any>

const defaultArgs: Partial<any> = {}

const defaultParams = {
  design: {
    tpe: 'figma',
    url: 'https://www.figma.com/file/OXq1C8cPtY3JtmwmGfD23I/ALEPH-rebranding-UIKIT?node-id=1%3A276&t=OG6V4eRdvQIurCbK-0',
  },
}

// ---

const ResponsiveTemplate: ComponentStory<any> = (args) => {
  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `

  const Container = styled.div`
    display: block;
    overflow: hidden;
    background-color: #cccccc33;
    margin: 1rem;
  `

  const Item = styled.span`
    background-color: #fabada88;
  `

  return (
    <div>
      <StoryBookHeader>Responsive Styles</StoryBookHeader>
      <div>
        <StoryBookSubheader>Margins</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7 p-0 m-xl m-lg-xs m-md-sm m-sm-md m-xs-lg m-0-xl">from xl to 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7 p-0 m-0 m-xs-xs m-sm-sm m-md-md m-lg-lg m-xl-xl">from 0 to xl</Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Paddings</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7 m-0 p-xl p-lg-xs p-md-sm p-sm-md p-xs-lg p-0-xl">from xl to 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 p-0 p-xs-xs p-sm-sm p-md-md p-lg-lg p-xl-xl">from 0 to xl</Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Display</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7 m-0 d-block d-none-xs">visible 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 d-none d-block-xs d-none-sm">visible xs</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 d-none d-block-sm d-none-md">visible sm</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 d-none d-block-md d-none-lg">visible md</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 d-none d-block-lg d-none-xl">visible lg</Item>
          </Container>
          <Container>
            <Item className="tp-h7 m-0 d-none d-block-xl">visible xl</Item>
          </Container>
        </Wrapper>

      </div>
    </div>
  )
}

export const Responsive = ResponsiveTemplate.bind({})
Responsive.args = {
  ...defaultArgs,
}
Responsive.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
