import styled, { css } from 'styled-components'
import { getThemeFamily } from '../../themes/utils'

export const StoryBookHeader = styled.h1`
  ${({ theme }) => {
    const font =
      getThemeFamily(theme.name) === 'aleph' ? theme.font.family.body : theme.font.family.head
    const color = getThemeFamily(theme.name) === 'aleph' ? theme.color.text : theme.color.main0

    return css`
      display: inline-block;
      font-family: ${font};
      font-style: italic;
      font-weight: 800;
      font-size: 132px;
      line-height: 155px;
      color: ${color};
      border-bottom: 2px solid ${color};
      margin-bottom: 74px;
    `
  }}
`

export const StoryBookSubheader = styled.h2`
  ${({ theme }) => {
    const font = theme.font.family.head
    const color = getThemeFamily(theme.name) === 'aleph' ? theme.color.text : theme.color.main0

    return css`
      display: inline-block;
      font-family: ${font};
      font-style: italic;
      font-weight: 600;
      font-size: 48px;
      line-height: 57px;
      color: ${color};
      border-bottom: 2px solid ${color};
      margin-bottom: 74px;
      margin-top: 74px;
    `
  }}
`
