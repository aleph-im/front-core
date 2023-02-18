import React from 'react'
import { BulletListProps, BulletItemProps } from './types'
import { StyledBulletList, StyledBulletItemIcon, StyledBulletItem, StyledBulletItemIconWrap } from './styles'

export const BulletItem = ({ kind, size, title, text }: BulletItemProps) => {
  return (
    <StyledBulletItem>
      <StyledBulletItemIconWrap {...{ kind, size }}>
        <StyledBulletItemIcon  {...{ kind, $size: size }} />
      </StyledBulletItemIconWrap>
      <div>
        <span className='tp-h7'>{title}</span>
        {text && (<p className='m-0'>{text}</p>)}
      </div>
    </StyledBulletItem>
  )
}

export const BulletList = ({
  size = 'big',
  items,
  children,
}: BulletListProps) => {
  return (
    <StyledBulletList>
      {(children ? children : (
        items.map((item, i) => <BulletItem key={i} {...item} size={size} />)
      ))}
    </StyledBulletList>
  )
}
