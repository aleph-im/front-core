import React, { memo, useCallback, useState, MouseEvent } from 'react'
import { RouterNavbarProps, RouteProps } from './types'
import Logo from '../../common/Logo'
import Navbar from '../Navbar'
import NavbarLinkList from '../NavbarLinkList'
import NavbarLink from '../NavbarLink'
import { StyledChildRoutes, StyledNavLink, StyledNavTitle } from './styles'
import ToggleContainer from '../../layout/ToggleContainer'

const ParentRoute = (props: RouteProps) => {
  const { breakpoint, pathname, route, isActive, Link, level = 0 } = props
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
        <StyledNavLink {...props} onClick={handleClick} />
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
                breakpoint,
                pathname,
                route,
                Link,
                level: newLevel,
              }}
            />
          ))}
        </ToggleContainer>
      </StyledChildRoutes>
    </>
  )
}
ParentRoute.displayName = 'ParentRoute'

const Route = (props: RouteProps) => {
  const { route, breakpoint, level = 0 } = props
  const isActive = props.pathname.indexOf(route.href) >= 0
  const newProps = { ...props, level, isActive }

  return (
    <>
      {route.children ? (
        <ParentRouteMemo {...newProps} />
      ) : (
        <NavbarLink breakpoint={breakpoint} level={level}>
          <StyledNavLink {...newProps} />
        </NavbarLink>
      )}
    </>
  )
}
Route.displayName = 'Route'

export const RouterNavbar = ({
  breakpoint = 'md',
  pathname,
  routes,
  Link,
  onToggle,
  ...rest
}: RouterNavbarProps) => {
  const handleCloseMenu = useCallback(() => {
    onToggle && onToggle(false)
  }, [onToggle])

  // -----------------------------------

  return (
    <Navbar {...rest} logo={<Logo />}>
      <NavbarLinkList
        withSlash
        collapsible="xl"
        onClick={handleCloseMenu}
        breakpoint={breakpoint}
      >
        {routes.map((route) => (
          <RouteMemo
            key={route.href}
            {...{
              breakpoint,
              pathname,
              route,
              Link,
            }}
          />
        ))}
      </NavbarLinkList>
      <NavbarLinkList mobileDirection="row">HOLA</NavbarLinkList>
    </Navbar>
  )
}
RouterNavbar.displayName = 'RouterNavbar'

export const ParentRouteMemo = memo(ParentRoute)
export const RouteMemo = memo(Route)
export default memo(RouterNavbar)
