import React from 'react'
import { BulletListProps, BulletItemProps } from './types'
import { StyledList, StyledIcon, StyledItem, StyledIconContainer, StyledTitle } from './styles'

export const BulletItem = ({ kind, size, title, text, ...rest }: BulletItemProps) => {
  return (
    <StyledItem {...rest}>
      <StyledIconContainer {...{ kind, size }}>
        <StyledIcon  {...{ kind, $size: size }} />
      </StyledIconContainer>
      <div>
        <StyledTitle {...{ size }}>{title}</StyledTitle>
        {text && (<p className='m-0 -mt-1 fs-sm'>{text}</p>)}
      </div>
    </StyledItem>
  )
}

export const BulletList = ({
  size = 'big',
  items,
  children,
  ...rest
}: BulletListProps) => {
  return (
    <StyledList {...rest}>
      {(children ? children : (
        items.map((item, i) => <BulletItem key={i} {...item} size={size} />)
      ))}
    </StyledList>
  )
}
