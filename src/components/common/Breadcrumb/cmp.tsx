import React, { memo } from 'react'
import { StyledNavlink } from './styles'
import { BreadcrumbProps } from './types'

export const Breadcrumb = ({
  navLinks,
  selected = navLinks.length - 1,
  selectedColor,
  ...rest
}: BreadcrumbProps) => {
  return (
    <nav {...rest}>
      {navLinks && (
        <ul tw="flex flex-wrap items-center">
          {navLinks.map((el, index) => (
            <StyledNavlink
              key={index}
              selected={index === selected}
              selectedColor={selectedColor}
            >
              {el}
            </StyledNavlink>
          ))}
        </ul>
      )}
    </nav>
  )
}
Breadcrumb.displayName = 'Breadcrumb'

export default memo(Breadcrumb) as typeof Breadcrumb
