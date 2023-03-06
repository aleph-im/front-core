import React from 'react'
import { StyledTag } from './styles'
import { TagProps } from './types'

export const Tag = ({ children, ...rest }: TagProps) => {
  return (
    <StyledTag {...rest}>
      {children}
    </StyledTag>
  )
}

export default Tag
