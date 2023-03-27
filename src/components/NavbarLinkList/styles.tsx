import styled, { css } from 'styled-components'
import { getResponsiveCss } from '../../styles'
import { addClasses } from '../../utils'

// A <ul> element, wrapping the links (text and buttons)
export const StyledNavlinkList = styled.ul.attrs(addClasses('p-0 m-0 mr-xl mt-xl mt-0-md'))`
  display: list-item;
  list-style: none;
  max-width: 100%;
  flex: 0 1 auto;
  
  &:last-child {
    margin-right: 0;
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
