import React from 'react'
import { StoryFn } from '@storybook/react'
import { StoryBookHeader, StoryBookSubheader } from './utils'
import styled, { useTheme } from 'styled-components'
import {
  useResponsiveBetween,
  useResponsiveBreakpoint,
  useResponsiveMax,
  useResponsiveMin,
  useWindowSize,
} from '../../hooks'

export default {
  title: 'Design/Atoms/Responsive',
}

const defaultArgs: Partial<any> = {}

const defaultParams = {}

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
            <Item
              className="tp-h7"
              tw="p-0 m-7 xs:m-6 sm:m-5 md:m-4 lg:m-2.5 xl:m-0"
            >
              from xl to 0
            </Item>
          </Container>
          <Container>
            <Item
              className="tp-h7"
              tw="p-0 m-0 xs:m-2.5 sm:m-4 md:m-5 lg:m-6 xl:m-7"
            >
              from 0 to xl
            </Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Paddings</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item
              className="tp-h7"
              tw="m-0 p-7 xs:p-6 sm:p-5 md:p-4 lg:p-2.5 xl:p-0"
            >
              from xl to 0
            </Item>
          </Container>
          <Container>
            <Item
              className="tp-h7"
              tw="m-0 p-0 xs:p-2.5 sm:p-4 md:p-5 lg:p-6 xl:p-7"
            >
              from 0 to xl
            </Item>
          </Container>
        </Wrapper>
      </div>
      <div>
        <StoryBookSubheader>Display</StoryBookSubheader>
        <Wrapper>
          <Container>
            <Item className="tp-h7" tw="m-0 block xs:hidden">
              visible 0
            </Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden xs:block sm:hidden">
              visible xs
            </Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden sm:block md:hidden">
              visible sm
            </Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden md:block lg:hidden">
              visible md
            </Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden lg:block xl:hidden">
              visible lg
            </Item>
          </Container>
          <Container>
            <Item className="tp-h7" tw="m-0 hidden xl:block">
              visible xl
            </Item>
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

const ResponsiveHooksTemplate: StoryFn<any> = () => {
  const theme = useTheme()
  const currentSize = useWindowSize(0)

  const breakpoint = useResponsiveBreakpoint()
  const min = useResponsiveMin('md') + ''
  const max = useResponsiveMax('lg') + ''
  const bet = useResponsiveBetween('md', 'lg') + ''

  return (
    <>
      <h6>Resize the window to test it</h6>
      <table>
        <tr>
          <td>
            <strong>Current size</strong>
          </td>
          <td>
            <span tw="ml-4 text-10">{currentSize?.width}px</span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Current breakpoint</strong>
          </td>
          <td>
            <span tw="ml-4 text-10">
              {breakpoint} ({theme.breakpoint[breakpoint] * 16}px)
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>size &gt;= md ({theme.breakpoint['md'] * 16}px)</strong>
          </td>
          <td>
            <span tw="ml-4 text-10">{min}</span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>size &lt; lg ({theme.breakpoint['lg'] * 16}px)</strong>
          </td>
          <td>
            <span tw="ml-4 text-10">{max}</span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>
              size &gt;= ({theme.breakpoint['md'] * 16}px) && size &lt; (
              {theme.breakpoint['lg'] * 16}px)
            </strong>
          </td>
          <td>
            <span tw="ml-4 text-10">{bet}</span>
          </td>
        </tr>
      </table>
    </>
  )
}

export const ResponsiveHooks = ResponsiveHooksTemplate.bind({})
ResponsiveHooks.args = {
  ...defaultArgs,
}
ResponsiveHooks.parameters = {
  ...defaultParams,
  controls: { include: [], hideNoControlsWarning: true },
}
