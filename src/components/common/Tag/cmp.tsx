import React, { memo } from 'react'
import { StyledTag } from './styles'
import { TagProps } from './types'

export const Tag = ({ children, ...rest }: TagProps) => {
  return <StyledTag {...rest}>{children}</StyledTag>
}
Tag.displayName = 'Tag'

export default memo(Tag) as typeof Tag
