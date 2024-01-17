import React, { memo, useCallback, useState, MouseEvent, useMemo } from 'react'
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
import { useTheme } from 'styled-components'

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
              $level: level,
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
      <NavbarLink breakpoint={breakpoint}>
        <StyledRouterLink
          {...{
            route,
            Link,
            isActive,
            $level: level,
            ...rest,
          }}
          onClick={handleClick}
        />
      </NavbarLink>
      <StyledChildRoutes $breakpoint={breakpoint}>
        <ToggleContainer open={!!active}>
          <StyledChildRoutesContent>
            <NavbarLink breakpoint={breakpoint}>
              <StyledNavTitle {...{ $level: newLevel }}>{name}</StyledNavTitle>
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
  const theme = useTheme()

  const handleLinkClick = useCallback(() => {
    onToggle && onToggle(false)
  }, [onToggle])

  // -----------------------------------

  const { logoText } = theme.component.navbar

  const logo = useMemo(
    () => (
      <Link href="/" route={{ href: '/' }}>
        <Logo text={logoText} />
      </Link>
    ),
    [Link, logoText],
  )

  return (
    <Navbar
      {...{
        breakpoint,
        onToggle,
        logo,
        ...rest,
      }}
    >
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
