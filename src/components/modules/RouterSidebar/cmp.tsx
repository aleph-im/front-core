import { memo, useCallback, useMemo, useState, MouseEvent } from 'react'
import {
  StyledLink,
  StyledLogo,
  StyledNav1,
  StyledRouterLink1,
  StyledNav2,
  StyledRouterLink2,
  StyledNav2Container,
  StyledNav2Title,
  StyledProgressBar,
  StyledSidebar,
  StyledStorageContainer,
  StyledToggleButton,
  StyledLogoContainer,
  StyledNav1Container,
  StyledNav2LinkContainer,
} from './styles'
import React from 'react'
import { RouteProps, RouterSidebarProps } from './types'

const Route = (props: RouteProps) => {
  const { pathname, route, level = 0, Link, ...rest } = props
  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const linkProps = {
    route,
    Link,
    isActive,
    ...rest,
  }

  return (
    <StyledLink>
      {level <= 0 ? (
        <StyledRouterLink1 {...linkProps} />
      ) : (
        <>
          {route.children ? (
            <>
              {route.name && (
                <div tw="relative">
                  <StyledNav2Title>{route.name}</StyledNav2Title>
                </div>
              )}
              {route?.children?.map((route) => (
                <RouteMemo
                  key={route.href}
                  {...{
                    route,
                    Link,
                    pathname,
                    exact: route.exact,
                    disabled: route.disabled,
                    level: 1,
                  }}
                />
              ))}
            </>
          ) : (
            <StyledRouterLink2 {...linkProps} />
          )}
        </>
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
  open,
  logoHref = '/',
  onToggle,
}: RouterSidebarProps) => {
  const [hover, setHover] = useState<boolean | undefined>(false)

  const handleToggle = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      const tagName = e.currentTarget.tagName
      const isOpen = open === undefined || !!open
      const toggleTo =
        isOpen && tagName.toLowerCase() !== 'svg' ? open : !isOpen

      onToggle && onToggle(toggleTo)
    },
    [open, onToggle],
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

  // -----------------------------------------

  const logo = useMemo(
    () => (
      <Link href={logoHref} route={{ href: logoHref }}>
        <StyledLogo />
      </Link>
    ),
    [Link, logoHref],
  )

  // -----------------------------------------

  const $isOpen = open
  const $isHover = hover && !!onToggle

  return (
    <StyledSidebar
      {...{
        $breakpoint,
        $isOpen,
        $isHover,
      }}
    >
      <StyledNav1>
        <StyledNav1Container>
          <StyledLogoContainer>{logo}</StyledLogoContainer>
          {routes.map((route) => (
            <RouteMemo
              key={route.href}
              {...{
                route,
                Link,
                pathname,
                exact: route.exact,
                disabled: route.disabled,
                level: 0,
              }}
            />
          ))}
        </StyledNav1Container>
      </StyledNav1>
      <StyledNav2
        onClick={handleToggle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <StyledNav2Container>
          <StyledNav2LinkContainer
            onClick={handlePreventPropagation}
            onMouseOver={handlePreventPropagation}
            onMouseOut={handlePreventPropagation}
          >
            {currentRoute?.children?.map((route) => (
              <RouteMemo
                key={route.href}
                {...{
                  route,
                  Link,
                  pathname,
                  exact: route.exact,
                  disabled: route.disabled,
                  level: 1,
                }}
              />
            ))}
          </StyledNav2LinkContainer>
          <div tw="flex-1" />
          <div tw="py-12 flex flex-col justify-end h-[14.9375rem] shrink-0 w-full">
            {!!onToggle && (
              <div tw="px-6">
                <StyledToggleButton onClick={handleToggle} />
              </div>
            )}
            <div tw="flex-1" />
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
        </StyledNav2Container>
      </StyledNav2>
    </StyledSidebar>
  )
}
RouterSidebar.displayName = 'RouterSidebar'

export const RouteMemo = memo(Route) as typeof Route
export default memo(RouterSidebar) as typeof RouterSidebar
