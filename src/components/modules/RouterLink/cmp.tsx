import React, { memo } from 'react'
import {
  StyledRouteLink,
  StyledRouteLinkIcon,
  StyledRouteLinkText,
  StyledNotificationBadge,
} from './styles'
import { RouterLinkProps } from './types'

export const RouterLink = ({
  route,
  isActive: $isActive,
  disabled: $disabled,
  variant: $variant,
  Link,
  ...rest
}: RouterLinkProps) => {
  const { name, icon, flag } = route

  return (
    <Link {...{ route, ...rest }}>
      <StyledRouteLink
        {...{
          $variant,
          $isActive,
          $disabled,
          $hasIcon: !!icon,
          $hasFlag: !!flag,
        }}
      >
        {!!icon && <StyledRouteLinkIcon name={icon} />}
        {!!name && <StyledRouteLinkText>{name}</StyledRouteLinkText>}
        {!!flag && <StyledNotificationBadge>{flag}</StyledNotificationBadge>}
      </StyledRouteLink>
    </Link>
  )
}
RouterLink.displayName = 'RouterLink'

export default memo(RouterLink) as typeof RouterLink
