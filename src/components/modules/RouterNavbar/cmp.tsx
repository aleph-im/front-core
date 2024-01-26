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
import { useResponsiveMin } from '../../../hooks'

const Route = (props: RouteProps) => {
  const {
    pathname,
    route,
    breakpoint,
    Link,
    level = 0,
    onClick,
    variant,
    exact,
    disabled,
    ...rest
  } = props
  const isActive = exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

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
            variant,
            level,
            onClick,
          }}
        />
      ) : (
        <NavbarLink breakpoint={breakpoint} level={level}>
          <StyledRouterLink
            {...{
              ...linkProps,
              variant,
              isActive,
              onClick,
              $level: level,
              disabled,
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
    variant,
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

  const subroutes = (
    <>
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
            exact: route.exact,
            disabled: route.disabled,
            onClick,
            ...rest,
          }}
        />
      ))}
    </>
  )

  return (
    <>
      {level < 1 ? (
        <>
          <NavbarLink breakpoint={breakpoint}>
            <StyledRouterLink
              {...{
                route,
                Link,
                isActive,
                $level: level,
                variant,
                ...rest,
              }}
              onClick={handleClick}
            />
          </NavbarLink>
          <StyledChildRoutes $breakpoint={breakpoint}>
            <ToggleContainer open={!!active}>
              <StyledChildRoutesContent>{subroutes}</StyledChildRoutesContent>
            </ToggleContainer>
          </StyledChildRoutes>
        </>
      ) : (
        subroutes
      )}
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
  const variant = useResponsiveMin(breakpoint) ? '3' : '4'

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
              variant,
              pathname,
              onClick: handleLinkClick,
              exact: route.exact,
              disabled: route.disabled,
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
