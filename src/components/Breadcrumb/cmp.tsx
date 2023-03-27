import React from 'react'
import { StyledNavlinks, StyledNavlink } from './styles'
import { BreadcrumbProps } from './types'

export const Breadcrumb = ({ navLinks, ...rest }: BreadcrumbProps) => {
  return (
    <nav {...rest}>
      {navLinks && (
        <StyledNavlinks>
          {navLinks.map((el, index) => (
            <StyledNavlink key={index}>
              {el}
            </StyledNavlink>
          ))}
        </StyledNavlinks>
      )}
    </nav>
  )
}

export default Breadcrumb