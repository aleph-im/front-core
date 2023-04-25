import React from 'react'
import { StoryFn } from '@storybook/react'
import { StoryBookHeader, StoryBookSubheader } from './utils'
import styled from 'styled-components'

export default {
  title: 'Design/Atoms/Responsive',
}

const defaultArgs: Partial<any> = {}

const defaultParams = {
}

// ---

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


const ResponsiveTemplate: StoryFn<any> = () => {

  return (
    <div>
      <StoryBookHeader>Responsive Styles</StoryBookHeader>
      <div>
        <StoryBookSubheader>Margins</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7" tw="p-0 m-7 xs:m-6 sm:m-5 md:m-4 lg:m-2.5 xl:m-0">from xl to 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="p-0 m-0 xs:m-2.5 sm:m-4 md:m-5 lg:m-6 xl:m-7">from 0 to xl</Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Paddings</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7" tw="m-0 p-7 xs:p-6 sm:p-5 md:p-4 lg:p-2.5 xl:p-0">from xl to 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 p-0 xs:p-2.5 sm:p-4 md:p-5 lg:p-6 xl:p-7">from 0 to xl</Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Display</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7" tw="m-0 block xs:hidden">visible 0</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden xs:block sm:hidden">visible xs</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden sm:block md:hidden">visible sm</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden md:block lg:hidden">visible md</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden lg:block xl:hidden">visible lg</Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden xl:block">visible xl</Item>
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
