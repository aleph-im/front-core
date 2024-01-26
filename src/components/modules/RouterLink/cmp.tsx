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

  const content = (
    <StyledRouterLink
      {...{
        $variant,
        $isActive,
        $disabled,
        $hasIcon: !!icon,
        $hasFlag: !!flag,
        className: $isActive ? '_active' : '',
      }}
    >
      {!!icon && <StyledRouteLinkIcon name={icon} />}
      {!!name && <StyledRouteLinkText>{name}</StyledRouteLinkText>}
      {!!flag && <StyledNotificationBadge>{flag}</StyledNotificationBadge>}
    </StyledRouterLink>
  )

  return $disabled ? (
    <span
      tw="flex flex-col items-start !cursor-auto w-full overflow-auto"
      {...rest}
    >
      {content}
    </span>
  ) : (
    <Link {...{ route, href, target, ...rest }}>{content}</Link>
  )
}
RouterLink.displayName = 'RouterLink'

export default memo(RouterLink) as typeof RouterLink
