import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { addClasses } from '../../utils'

// A <ul> element, wrapping the links (text and buttons)
export const StyledNavlinkList = styled.ul.attrs(addClasses('px-xl'))`
  display: list-item;
  list-style: none;
  padding: 0 25px;
  margin: 0;

  &:first-child {
    margin-top: 25px;
  }

  ${getResponsiveCss('md', css`
      display: flex;
      align-items: center;

      &:first-child {
        margin-top: 0;
      }
    `,
)}
`
