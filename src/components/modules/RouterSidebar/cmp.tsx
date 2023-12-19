import { memo, useCallback, useMemo, useState, MouseEvent } from 'react'
import {
  StyledLink,
  StyledLogo,
  StyledNav1,
  StyledNav1Link,
  StyledNav2,
  StyledNav2Link,
  StyledNav2LinkContainer,
  StyledNav2Title,
  StyledProgressBar,
  StyledSidebar,
  StyledStorageContainer,
  StyledToggleButton,
} from './styles'
import React from 'react'
import { RouteProps, RouterSidebarProps } from './types'

const Route = (props: RouteProps) => {
  const { href, pathname, route, level = 0, Link } = props
  const isActive = pathname.indexOf(route.href) >= 0

  const linkProps = {
    href,
    route,
    Link,
    isActive,
  }

  return (
    <StyledLink>
      {level <= 0 ? (
        <StyledNav1Link {...linkProps} />
      ) : (
        <StyledNav2Link {...linkProps} />
      )}
    </StyledLink>
  )
}
Route.displayName = 'Route'

// -------------------------

export const RouterSidebar = ({
  routes,
  pathname,
  allowanceInfo,
  Link,
  breakpoint: $breakpoint = 'md',
}: RouterSidebarProps) => {
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
    () =>
      routes
        .filter((route) => !route.external)
        .find((route) => pathname.indexOf(route.href) === 0),
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
        {routes.map((route) => (
          <RouteMemo
            key={route.href}
            {...{
              href: route.href,
              route,
              Link,
              pathname,
              level: 0,
            }}
          />
        ))}
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
              {currentRoute?.children.map((route) => (
                <RouteMemo
                  key={route.href}
                  {...{
                    href: route.href,
                    route,
                    Link,
                    pathname,
                    level: 1,
                  }}
                />
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
RouterSidebar.displayName = 'RouterSidebar'

export const RouteMemo = memo(Route) as typeof Route
export default memo(RouterSidebar) as typeof RouterSidebar
