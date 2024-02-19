import React, { memo } from 'react'
import { StyledTag } from './styles'
import { TagProps } from './types'

export const Tag = ({
  children,
  variant: $variant = 'default',
  ...rest
}: TagProps) => {
  return (
    <StyledTag
      {...{
        $variant,
        ...rest,
      }}
    >
      {children}
    </StyledTag>
  )
}
Tag.displayName = 'Tag'

export default memo(Tag) as typeof Tag
