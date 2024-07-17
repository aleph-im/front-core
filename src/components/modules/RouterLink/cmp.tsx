import React, { memo, useMemo } from 'react'
import {
  StyledRouterLink,
  StyledRouteLinkIcon,
  StyledRouteLinkText,
  StyledNotificationBadge,
  StyledRouterLinkLabel,
  StyledDisabledRouterLink,
} from './styles'
import { RouterLinkProps } from './types'
import TextGradient from '../../common/TextGradient'

const RouterLink = ({
  route,
  isActive: $isActive,
  disabled: $disabled,
  variant: $variant,
  iconPosition = 'left',
  Link,
  ...rest
}: RouterLinkProps) => {
  const { name, icon, flag, href, target, label, highlighted } = route
  const gradient = highlighted ? 'info' : undefined

  const renderIcon = useMemo(
    () => !!icon && <StyledRouteLinkIcon name={icon} gradient={gradient} />,
    [gradient, icon],
  )

  const renderText = useMemo(
    () => (
      <>
        {!!name && (
          <StyledRouteLinkText>
            {highlighted ? (
              <TextGradient type="nav" color={gradient}>
                {name}
              </TextGradient>
            ) : (
              name
            )}
          </StyledRouteLinkText>
        )}
        {!!label && <StyledRouterLinkLabel>{label}</StyledRouterLinkLabel>}
      </>
    ),
    [gradient, highlighted, label, name],
  )

  const iconTextOrder = useMemo(
    () =>
      iconPosition === 'left' || iconPosition === 'top'
        ? [renderIcon, renderText]
        : [renderText, renderIcon],
    [iconPosition, renderIcon, renderText],
  )

  const renderIconTextElement = useMemo(
    () =>
      iconPosition === 'left' || iconPosition === 'right' ? (
        iconTextOrder
      ) : (
        <div tw="flex flex-col items-center gap-1">{iconTextOrder}</div>
      ),
    [iconPosition, iconTextOrder],
  )

  const content = (
    <StyledRouterLink
      $variant={$variant}
      $isActive={$isActive}
      $disabled={$disabled}
      $hasIcon={!!icon}
      $hasFlag={!!flag}
      className={$isActive ? '_active' : ''}
    >
      {renderIconTextElement}
      {!!flag && <StyledNotificationBadge>{flag}</StyledNotificationBadge>}
    </StyledRouterLink>
  )

  return $disabled ? (
    <StyledDisabledRouterLink {...rest}>{content}</StyledDisabledRouterLink>
  ) : (
    <Link {...{ route, href, target, ...rest }}>{content}</Link>
  )
}

RouterLink.displayName = 'RouterLink'

export default memo(RouterLink)
