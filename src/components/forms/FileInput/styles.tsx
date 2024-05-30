import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { addClasses } from '../../../utils'

export const StyledFileInput = styled.input`
  display: none;
`

export type StyledContainerProps = {
  $isDragging: boolean
}

export const StyledContainer = styled.div.attrs(
  addClasses('tp-body3 fs-18'),
)<StyledContainerProps>`
  ${({ theme, $isDragging }) => {
    const styles = $isDragging ? theme.form.file.hover : theme.form.file
    const { background, border, color } = styles

    return css`
      ${tw`flex items-center justify-center w-full`}
      min-height: 12rem;
      border-radius: 1.875rem;
      background: ${background};
      border: ${border};
      color: ${color};
    `
  }}
`
