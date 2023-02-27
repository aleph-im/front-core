import React from 'react'
import { StyledNavlinks, StyledNavlink } from './styles'
import { BreadcrumbProps } from './types'

const Breadcrumb = ({ navLinks }: BreadcrumbProps) => {
  return (
    <nav>
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