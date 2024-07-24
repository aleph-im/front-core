import React, { memo, useCallback, useMemo, useState, MouseEvent } from 'react'
import { useTransition } from 'transition-hook'
import {
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
  StyledNav2Icon,
  StyledNav1Link,
  StyledOpenedNav2Link,
  StyledClosedNav2Link,
  StyledNav2TitleContainer,
  StyledNav2MainTitle,
  StyledOpenedNav2LinkContainer,
  StyledClosedNav2LinkContainer,
} from './styles'
import { RouteProps, RouterSidebarProps } from './types'
import { RouterLinkProps } from '../RouterLink'

const Nav1Route = (props: RouteProps) => {
  const { pathname, route, Link, ...rest } = props
  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const linkProps: RouterLinkProps = {
    route,
    Link,
    isActive,
    ...rest,
  }

  return (
    <StyledNav1Link>
      <StyledRouterLink1 {...linkProps} />
    </StyledNav1Link>
  )
}
Nav1Route.displayName = 'Nav1Route'

const OpenedNav2Route = (props: RouteProps) => {
  const { pathname, route, level = 1, Link, ...rest } = props

  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const routeIcon = (route: any) => {
    if (route.highlighted) return route.icon
    if (route.children?.length) return route.icon

    return undefined
  }

  const $route = {
    ...route,
    icon: routeIcon(route),
  }

  const linkProps: RouterLinkProps = {
    route: $route,
    Link,
    isActive,
    iconPosition: route.highlighted ? 'right' : 'left',
    ...rest,
  }

  return (
    <StyledOpenedNav2Link>
      {$route.children ? (
        <>
          {$route.name && (
            <StyledNav2TitleContainer>
              {level > 1 ? (
                <StyledNav2Title>
                  {$route.icon && <StyledNav2Icon name={$route.icon} />}
                  {$route.name}
                </StyledNav2Title>
              ) : (
                <StyledNav2MainTitle>{$route.name}</StyledNav2MainTitle>
              )}
            </StyledNav2TitleContainer>
          )}
          {$route?.children?.map((childrenRoute) => (
            <OpenedNav2RouteMemo
              key={childrenRoute.href}
              {...{
                route: childrenRoute,
                Link,
                pathname,
                exact: childrenRoute.exact,
                disabled: childrenRoute.disabled,
                level: level + 1,
              }}
            />
          ))}
        </>
      ) : (
        <StyledRouterLink2 {...linkProps} />
      )}
    </StyledOpenedNav2Link>
  )
}
OpenedNav2Route.displayName = 'OpenedNav2Route'

const ClosedNav2Route = (props: RouteProps) => {
  const { pathname, route, level = 0, Link, ...rest } = props

  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const routeIcon = (route: any) => {
    if (route.highlighted) return route.icon
    if (!route.children?.length) return route.icon

    return undefined
  }

  const routeName = (route: any) => {
    if (route.highlighted) return route.name
    if (route.children?.length) return route.name

    return undefined
  }

  const $route = {
    ...route,
    icon: routeIcon(route),
    name: routeName(route),
    label: undefined,
  }

  const linkProps: RouterLinkProps = {
    route: $route,
    Link,
    isActive,
    iconPosition: route.highlighted ? 'bottom' : undefined,
    ...rest,
  }

  return (
    <StyledClosedNav2Link>
      {$route.children ? (
        <>
          {$route.name && (
            <StyledNav2TitleContainer>
              {level > 1 ? (
                <StyledNav2Title>
                  {$route.icon && <StyledNav2Icon name={$route.icon} />}
                  {$route.name}
                </StyledNav2Title>
              ) : (
                <StyledNav2MainTitle>{$route.name}</StyledNav2MainTitle>
              )}
            </StyledNav2TitleContainer>
          )}
          {$route?.children?.map((childrenRoute) => (
            <ClosedNav2RouteMemo
              key={childrenRoute.href}
              {...{
                route: childrenRoute,
                Link,
                pathname,
                exact: childrenRoute.exact,
                disabled: childrenRoute.disabled,
                level: level + 1,
              }}
            />
          ))}
        </>
      ) : (
        <StyledRouterLink2 {...linkProps} />
      )}
    </StyledClosedNav2Link>
  )
}
ClosedNav2Route.displayName = 'ClosedNav2Route'

// -------------------------

export const RouterSidebar = ({
  routes,
  pathname,
  allowanceInfo,
  Link,
  breakpoint: $breakpoint = 'md',
  open,
  logoHref = '/',
  logoTarget,
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
      <Link href={logoHref} target={logoTarget} route={{ href: logoHref }}>
        <StyledLogo />
      </Link>
    ),
    [Link, logoHref, logoTarget],
  )

  // -----------------------------------------

  const $isOpen = open
  const $isHover = hover && !!onToggle
  const isOpenState = $isOpen || $isOpen === undefined

  const { shouldMount: $shouldMountOpened, stage: $stageOpened } =
    useTransition(isOpenState, 500)
  const { shouldMount: $shouldMountClosed, stage: $stageClosed } =
    useTransition(!isOpenState, 500)

  const $showOpened = $shouldMountOpened && !$shouldMountClosed
  const $showClosed = $shouldMountClosed && !$shouldMountOpened

  console.log('OPENED', $shouldMountOpened, $stageOpened)
  console.log('CLOSED', $shouldMountClosed, $stageClosed)
  console.log('\n')

  return (
    <StyledSidebar
      {...{
        $breakpoint,
        $isOpen,
        $isHover,
        $showOpened,
        $showClosed,
      }}
    >
      <StyledNav1>
        <StyledNav1Container>
          <StyledLogoContainer>{logo}</StyledLogoContainer>
          {routes.map((route) => (
            <Nav1RouteMemo
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
          <StyledOpenedNav2LinkContainer
            onClick={handlePreventPropagation}
            onMouseOver={handlePreventPropagation}
            onMouseOut={handlePreventPropagation}
          >
            {currentRoute?.children?.map((route) => (
              <OpenedNav2RouteMemo
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
          </StyledOpenedNav2LinkContainer>
          <StyledClosedNav2LinkContainer
            onClick={handlePreventPropagation}
            onMouseOver={handlePreventPropagation}
            onMouseOut={handlePreventPropagation}
          >
            {currentRoute?.children?.map((route) => (
              <ClosedNav2Route
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
          </StyledClosedNav2LinkContainer>
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

export const Nav1RouteMemo = memo(Nav1Route) as typeof Nav1Route
export const OpenedNav2RouteMemo = memo(
  OpenedNav2Route,
) as typeof OpenedNav2Route
export const ClosedNav2RouteMemo = memo(
  ClosedNav2Route,
) as typeof ClosedNav2Route
export default memo(RouterSidebar) as typeof RouterSidebar
