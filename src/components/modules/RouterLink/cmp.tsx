import React, { memo } from 'react'
import {
  StyledRouterLink,
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
  const { name, icon, flag, href, target } = route

  return (
    <Link {...{ route, href, target, ...rest }}>
      <StyledRouterLink
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
      </StyledRouterLink>
    </Link>
  )
}
RouterLink.displayName = 'RouterLink'

export default memo(RouterLink) as typeof RouterLink
