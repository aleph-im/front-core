import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'

// A <ul> element, wrapping the links (text and buttons)
export const StyledNavlinkList = styled.ul`
  display: list-item;
  list-style: none;
  padding: 0 25px;
  margin: 0;

  &::first-child {
    margin-top: 25px;
  }

  ${getResponsiveCss('md', css`
      display: flex;
      align-items: center;

      &::first-child {
        margin-top: 0;
      }
    `,
)}
`
