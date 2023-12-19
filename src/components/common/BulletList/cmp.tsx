import React, { memo } from 'react'
import { BulletListProps, BulletItemProps } from './types'
import {
  StyledList,
  StyledIcon,
  StyledItem,
  StyledIconContainer,
  StyledTitle,
} from './styles'

export const BulletItem = ({
  kind,
  size,
  title,
  text,
  ...rest
}: BulletItemProps) => {
  return (
    <StyledItem {...rest}>
      <StyledIconContainer {...{ kind, size }}>
        <StyledIcon {...{ kind, $size: size }} />
      </StyledIconContainer>
      <div>
        <StyledTitle {...{ size }}>{title}</StyledTitle>
        {text && (
          <p className="fs-16" tw="m-0 -mt-1">
            {text}
          </p>
        )}
      </div>
    </StyledItem>
  )
}
BulletItem.displayName = 'BulletItem'

export const BulletList = ({
  size = 'big',
  items,
  children,
  ...rest
}: BulletListProps) => {
  return (
    <StyledList {...rest}>
      {children
        ? children
        : items.map((item, i) => (
            <BulletItemMemo key={i} {...item} size={size} />
          ))}
    </StyledList>
  )
}
BulletList.displayName = 'BulletList'

export const BulletItemMemo = memo(BulletItem) as typeof BulletItem
export default memo(BulletList) as typeof BulletList
