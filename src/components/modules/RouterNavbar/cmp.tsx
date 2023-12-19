import React, { memo, useCallback, useState, MouseEvent } from 'react'
import { RouterNavbarProps, RouteProps, ParentRouteProps } from './types'
import Logo from '../../common/Logo'
import Navbar from '../Navbar'
import NavbarLinkList from '../NavbarLinkList'
import NavbarLink from '../NavbarLink'
import { StyledChildRoutes, StyledRouterLink, StyledNavTitle } from './styles'
import ToggleContainer from '../../layout/ToggleContainer'

const Route = (props: RouteProps) => {
  const { href, pathname, route, breakpoint, Link, level = 0, onClick } = props
  const isActive = pathname.indexOf(route.href) >= 0

  return (
    <>
      {route.children ? (
        <ParentRouteMemo
          {...{
            href,
            isActive,
            route,
            Link,
            pathname,
            breakpoint,
            level,
            onClick,
          }}
        />
      ) : (
        <NavbarLink breakpoint={breakpoint} level={level}>
          <StyledRouterLink
            {...{
              href,
              isActive,
              route,
              Link,
              onClick,
            }}
          />
        </NavbarLink>
      )}
    </>
  )
}
Route.displayName = 'Route'

const ParentRoute = (props: ParentRouteProps) => {
  const {
    href,
    breakpoint,
    pathname,
    route,
    isActive,
    Link,
    level = 0,
    onClick,
  } = props
  const { name, children = [] } = route

  const [active, setActive] = useState(isActive)

  const handleClick = useCallback((e: MouseEvent) => {
    e.preventDefault()
    setActive((prev) => !prev)
  }, [])

  const newLevel = level + 1

  return (
    <>
      <NavbarLink breakpoint={breakpoint} level={level}>
        <StyledRouterLink
          {...{
            href,
            route,
            isActive,
            Link,
          }}
          onClick={handleClick}
        />
      </NavbarLink>
      <StyledChildRoutes $breakpoint={breakpoint}>
        <ToggleContainer open={!!active} as="ul">
          <NavbarLink breakpoint={breakpoint} level={newLevel}>
            <StyledNavTitle>{name}</StyledNavTitle>
          </NavbarLink>
          {children.map((route) => (
            <RouteMemo
              key={route.href}
              {...{
                href: route.href,
                breakpoint,
                pathname,
                route,
                Link,
                level: newLevel,
                onClick,
              }}
            />
          ))}
        </ToggleContainer>
      </StyledChildRoutes>
    </>
  )
}
ParentRoute.displayName = 'ParentRoute'

export const RouterNavbar = ({
  breakpoint = 'md',
  pathname,
  routes,
  Link,
  children,
  onToggle,
  ...rest
}: RouterNavbarProps) => {
  const handleLinkClick = useCallback(() => {
    onToggle && onToggle(false)
  }, [onToggle])

  // -----------------------------------

  return (
    <Navbar {...{ breakpoint, onToggle, ...rest }} logo={<Logo />}>
      <NavbarLinkList withSlash collapsible="xl" breakpoint={breakpoint}>
        {routes.map((route) => (
          <RouteMemo
            key={route.href}
            {...{
              href: route.href,
              breakpoint,
              pathname,
              route,
              Link,
              onClick: handleLinkClick,
            }}
          />
        ))}
      </NavbarLinkList>
      {children}
    </Navbar>
  )
}
RouterNavbar.displayName = 'RouterNavbar'

export const RouteMemo = memo(Route) as typeof Route
export const ParentRouteMemo = memo(ParentRoute) as typeof ParentRoute
export default memo(RouterNavbar) as typeof RouterNavbar
