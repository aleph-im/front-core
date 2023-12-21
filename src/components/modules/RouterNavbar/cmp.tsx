import React, { memo, useCallback, useState, MouseEvent } from 'react'
import { RouterNavbarProps, RouteProps, ParentRouteProps } from './types'
import Logo from '../../common/Logo'
import Navbar from '../Navbar'
import NavbarLinkList from '../NavbarLinkList'
import NavbarLink from '../NavbarLink'
import {
  StyledChildRoutes,
  StyledRouterLink,
  StyledNavTitle,
  StyledChildRoutesContent,
} from './styles'
import ToggleContainer from '../../layout/ToggleContainer'

const Route = (props: RouteProps) => {
  const {
    pathname,
    route,
    breakpoint,
    Link,
    level = 0,
    onClick,
    ...rest
  } = props
  const isActive = pathname.indexOf(route.href) >= 0

  const linkProps = {
    route,
    Link,
    ...rest,
  }

  return (
    <>
      {route.children ? (
        <ParentRouteMemo
          {...{
            ...linkProps,
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
              ...linkProps,
              isActive,
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
    breakpoint,
    pathname,
    route,
    Link,
    level = 0,
    onClick,
    ...rest
  } = props
  const { name, children = [] } = route

  const isActive = pathname.indexOf(route.href) >= 0
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
            route,
            Link,
            isActive,
            ...rest,
          }}
          onClick={handleClick}
        />
      </NavbarLink>
      <StyledChildRoutes $breakpoint={breakpoint}>
        <ToggleContainer open={!!active}>
          <StyledChildRoutesContent>
            <NavbarLink breakpoint={breakpoint} level={newLevel}>
              <StyledNavTitle>{name}</StyledNavTitle>
            </NavbarLink>
            {children.map((route) => (
              <RouteMemo
                key={route.href}
                {...{
                  route,
                  Link,
                  breakpoint,
                  pathname,
                  level: newLevel,
                  onClick,
                  ...rest,
                }}
              />
            ))}
          </StyledChildRoutesContent>
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
              route,
              Link,
              breakpoint,
              pathname,
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
