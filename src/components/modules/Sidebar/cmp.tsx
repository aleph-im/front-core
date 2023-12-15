import { memo, useCallback, useMemo, useState, MouseEvent } from 'react'
import {
  StyledLink,
  StyledLogo,
  StyledNav1,
  StyledNav1Link,
  StyledNav1LinkIcon,
  StyledNav2,
  StyledNav2Link,
  StyledNav2LinkContainer,
  StyledNav2LinkIcon,
  StyledNav2LinkText,
  StyledNav2Title,
  StyledNotificationBadge,
  StyledProgressBar,
  StyledSidebar,
  StyledStorageContainer,
  StyledToggleButton,
} from './styles'
import Icon from '../../common/Icon'
import React from 'react'
import NotificationBadge from '../../common/NotificationBadge'
import { SidebarLinkProps, SidebarProps } from './types'

const SidebarLink = ({
  level = 1,
  icon,
  flag,
  isOpen: $isOpen,
  isActive: $isActive,
  Link,
  children,
  ...rest
}: SidebarLinkProps) => {
  const props = { $isActive, $isOpen }

  const iconCmp = useMemo(
    () =>
      icon && (
        <Icon tw="p-1" {...{ name: icon, size: 'lg', prefix: 'custom' }} />
      ),
    [icon],
  )

  return (
    <StyledLink>
      <Link {...rest}>
        {level <= 1 ? (
          <StyledNav1Link {...props}>
            <StyledNav1LinkIcon>{iconCmp}</StyledNav1LinkIcon>
          </StyledNav1Link>
        ) : (
          <StyledNav2Link {...props}>
            <StyledNav2LinkIcon>
              {iconCmp}
              {flag && (
                <StyledNotificationBadge>{flag}</StyledNotificationBadge>
              )}
            </StyledNav2LinkIcon>
            <StyledNav2LinkText>
              {children}
              {flag && <NotificationBadge>{flag}</NotificationBadge>}
            </StyledNav2LinkText>
          </StyledNav2Link>
        )}
      </Link>
    </StyledLink>
  )
}
SidebarLink.displayName = 'SidebarLink'

// -------------------------

export const Sidebar = ({
  routes,
  pathname,
  allowanceInfo,
  Link,
  breakpoint: $breakpoint = 'md',
}: SidebarProps) => {
  const [open, setOpen] = useState<boolean | undefined>(undefined)
  const [hover, setHover] = useState<boolean | undefined>(false)

  const handleToggle = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      const tagName = e.currentTarget.tagName

      setOpen((prev) => {
        const isOpen = prev === undefined || !!prev
        if (isOpen && tagName.toLowerCase() !== 'svg') return prev
        return !isOpen
      })
    },
    [setOpen],
  )

  const handleMouseOver = useCallback(() => {
    setHover(true)
  }, [])

  const handleMouseOut = useCallback(() => {
    setHover(false)
  }, [])

  const handlePreventPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  // -----------------------------------

  const currentRoute = useMemo(
    () => routes.find((route) => pathname.indexOf(route.path) === 0),
    [pathname, routes],
  )

  // --------------------------------------------

  const consumedSize = (allowanceInfo?.consumedSize || 0) / 1024
  const allowedSize = (allowanceInfo?.allowedSize || 0) / 1024
  const storePercent = allowedSize ? consumedSize / allowedSize : 0

  return (
    <StyledSidebar
      {...{
        $breakpoint,
        $isOpen: open,
        $isHover: hover,
      }}
    >
      <StyledNav1>
        <StyledLogo />
        {routes.map((child) => (
          <SidebarLinkMemo
            key={child.path}
            {...{
              href: child.path,
              icon: child.icon,
              isOpen: open,
              isActive: pathname.indexOf(child.path) >= 0,
              Link,
            }}
          />
        ))}
        <SidebarLinkMemo
          icon="console"
          href="https://console.aleph.im/"
          target="_blank"
          Link={Link}
        />
        <SidebarLinkMemo
          icon="explore"
          href="https://explorer.aleph.im/"
          target="_blank"
          Link={Link}
        />
        <SidebarLinkMemo
          icon="swap"
          href="https://swap.aleph.im/"
          target="_blank"
          Link={Link}
        />
      </StyledNav1>
      <StyledNav2
        onClick={handleToggle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <StyledNav2LinkContainer
          onClick={handlePreventPropagation}
          onMouseOver={handlePreventPropagation}
          onMouseOut={handlePreventPropagation}
        >
          {currentRoute?.children && (
            <>
              {currentRoute?.name && (
                <StyledNav2Title>{currentRoute?.name}</StyledNav2Title>
              )}
              {currentRoute?.children.map((child) => (
                <SidebarLinkMemo
                  key={child.path}
                  href={child.path}
                  icon={child?.icon || currentRoute?.icon}
                  flag={child?.flag || currentRoute?.flag}
                  Link={Link}
                  level={2}
                >
                  {child.name}
                </SidebarLinkMemo>
              ))}
            </>
          )}
        </StyledNav2LinkContainer>
        <div tw="flex-1" />
        <div tw="py-12 flex flex-col justify-between h-[14.9375rem]">
          <div tw="px-6">
            <StyledToggleButton onClick={handleToggle} />
          </div>
          <StyledStorageContainer>
            <div tw="mb-4 flex gap-1 flex-wrap">
              <span tw="whitespace-nowrap">{consumedSize.toFixed(3)} GB</span>
              <span tw="opacity-60 font-normal whitespace-nowrap">
                of {allowedSize.toFixed(3)} GB
              </span>
            </div>
            <StyledProgressBar $percent={storePercent} />
          </StyledStorageContainer>
        </div>
      </StyledNav2>
    </StyledSidebar>
  )
}
Sidebar.displayName = 'Sidebar'

export const SidebarLinkMemo = memo(SidebarLink)
export default memo(Sidebar)
