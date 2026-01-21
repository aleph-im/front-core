import React, {
  memo,
  useCallback,
  useMemo,
  useState,
  MouseEvent,
  useRef,
} from 'react'
import { useTransition } from '../../../hooks'
import {
  StyledLogo,
  StyledNav1,
  StyledRouterLink1,
  StyledNav2,
  StyledRouterLink2,
  StyledNav2Container,
  StyledNav2Title,
  StyledSidebar,
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
  StyledTooltip,
  StyledToggleButtonContainer,
} from './styles'
import { RouteProps, RouterSidebarProps } from './types'
import { RouterLinkProps } from '../RouterLink'
import { useTheme } from 'styled-components'
import Icon from '../../common/Icon'

const Nav1Route = ({
  pathname,
  route,
  Link,
  isOpen,
  ...rest
}: RouteProps & { isOpen: boolean }) => {
  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const linkProps: RouterLinkProps = {
    route: {
      ...route,
      href: isOpen ? route.href : '#',
      target: isOpen ? route.target : undefined,
    },
    Link,
    isActive,
    ...rest,
  }

  const ref = useRef<any>(null)

  return (
    <StyledNav1Link>
      <div tw="w-full" ref={ref}>
        <StyledRouterLink1 {...linkProps} />
      </div>
      {isOpen && (
        <StyledTooltip
          content={[route.name, route.label].join(' ')}
          targetRef={ref}
        />
      )}
    </StyledNav1Link>
  )
}
Nav1Route.displayName = 'Nav1Route'

const OpenedNav2Route = ({
  pathname,
  route,
  level = 1,
  Link,
  ...rest
}: RouteProps) => {
  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const $route = {
    ...route,
    icon: route.highlighted || route.children?.length ? route.icon : undefined,
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
          {$route.children.map((childrenRoute) => (
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

const ClosedNav2Route = ({
  pathname,
  route,
  level = 0,
  Link,
  ...rest
}: RouteProps) => {
  const isActive = route.exact
    ? pathname === route.href
    : pathname.indexOf(route.href) >= 0

  const $route = {
    ...route,
    icon: route.highlighted || !route.children?.length ? route.icon : undefined,
    name: route.highlighted || route.children?.length ? route.name : undefined,
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
          {$route.children.map((childrenRoute) => (
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
      ) : $route.highlighted ? (
        <StyledRouterLink2 {...linkProps} />
      ) : (
        <div tw="w-full flex justify-center items-center">
          <StyledTooltip content={[route.name, route.label].join(' ')}>
            <StyledRouterLink2 {...linkProps} />
          </StyledTooltip>
        </div>
      )}
    </StyledClosedNav2Link>
  )
}
ClosedNav2Route.displayName = 'ClosedNav2Route'

// -------------------------
const ToggleButton = ({ isOpen = false, handleToggle, onToggle }: any) => (
  <StyledToggleButtonContainer>
    {!!onToggle && (
      <div tw="px-6">
        <StyledToggleButton $isOpen={isOpen} onClick={handleToggle} />
      </div>
    )}
  </StyledToggleButtonContainer>
)

ToggleButton.displayName = 'ToggleButton'

// -------------------------

export const RouterSidebar = ({
  routes,
  pathname,
  Link,
  breakpoint: $breakpoint = 'md',
  open,
  logoHref = '/',
  logoTarget,
  logoImg,
  animationSpeed = 1.5,
  animationSpeedOpeningMultiplier = 0.8,
  onToggle,
  footerLinks,
}: RouterSidebarProps) => {
  const [hover, setHover] = useState<boolean | undefined>(false)

  const handleToggle = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      const tagName = e.currentTarget.tagName.toLowerCase()
      const isOpen = open === undefined || !!open
      const toggleTo = isOpen && tagName !== 'svg' ? open : !isOpen

      onToggle && onToggle(toggleTo)
    },
    [open, onToggle],
  )

  const handleMouseOver = useCallback(() => setHover(true), [])
  const handleMouseOut = useCallback(() => setHover(false), [])
  const handlePreventPropagation = useCallback(
    (e: MouseEvent) => e.stopPropagation(),
    [],
  )

  // -----------------------------------

  const currentRoute = useMemo(
    () =>
      routes
        .filter((route) => !route.external)
        .find((route) => pathname.indexOf(route.href) === 0),
    [pathname, routes],
  )

  // -----------------------------------------

  const logo = useMemo(
    () => (
      <Link href={logoHref} target={logoTarget} route={{ href: logoHref }}>
        <StyledLogo img={logoImg} />
      </Link>
    ),
    [Link, logoHref, logoTarget, logoImg],
  )

  // --------------------------------------
  const theme = useTheme()
  const $closingSpeed = animationSpeed
  const $openingSpeed = animationSpeed * animationSpeedOpeningMultiplier
  const $isOpen = open
  const $isHover = hover && !!onToggle
  const isOpenState = $isOpen || $isOpen === undefined

  const { shouldMount: $shouldMountOpened } = useTransition(
    isOpenState,
    theme.transition.duration.normal / $closingSpeed,
  )
  const { shouldMount: $shouldMountClosed } = useTransition(
    !isOpenState,
    theme.transition.duration.normal / $openingSpeed,
  )

  const $showOpened = $shouldMountOpened && !$shouldMountClosed
  const $showClosed = $shouldMountClosed && !$shouldMountOpened

  return (
    <StyledSidebar
      {...{
        $breakpoint,
        $isOpen,
        $isHover,
        $showOpened,
        $showClosed,
        $closingSpeed,
        $openingSpeed,
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
                isOpen: isOpenState,
              }}
            />
          ))}
          <div tw="flex-1" />
          <ToggleButton onToggle={onToggle} handleToggle={handleToggle} />
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
            {footerLinks && (footerLinks.main || footerLinks.social) && (
              <div
                tw="h-full flex flex-col justify-end gap-4 my-12 mx-6"
                className="fs-14"
              >
                {footerLinks.main && (
                  <a
                    tw="flex items-center gap-1 cursor-pointer opacity-60 hover:opacity-80"
                    href={footerLinks.main.href}
                    target={footerLinks.main.target || '_blank'}
                    rel={footerLinks.main.rel || 'noreferrer'}
                  >
                    {footerLinks.main.label}
                    {footerLinks.main.icon && (
                      <Icon name={footerLinks.main.icon} size="0.9em" />
                    )}
                  </a>
                )}
                {footerLinks.social && footerLinks.social.length > 0 && (
                  <div tw="flex flex-wrap gap-x-4 w-full">
                    {footerLinks.social.map((link, index) => (
                      <a
                        key={index}
                        tw="cursor-pointer opacity-60 hover:opacity-80"
                        href={link.href}
                        target={link.target || '_blank'}
                        rel={link.rel || 'noreferrer'}
                      >
                        {link.icon && <Icon name={link.icon} size="1rem" />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
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
          <ToggleButton
            isOpen
            onToggle={onToggle}
            handleToggle={handleToggle}
          />
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
