import React, { memo, useCallback, useEffect, useRef } from 'react'
import {
  StyledMobileTopContainer,
  StyledHeadingContainer,
  StyledNavbarContainer,
  StyledNavContainer,
  StyledLogoContainer,
} from './styles'
import { NavbarProps } from './types'
import { useClickOutside, useTransitionedEnterExit } from '../../../hooks'
import Button from '../../common/Button'
import Icon from '../../common/Icon'

export const Navbar = ({
  logo,
  children,
  mobileTopContent,
  open,
  onToggle,
  height: $height = '6.5rem',
  breakpoint: $breakpoint = 'md',
  ...rest
}: NavbarProps) => {
  const toggleMenu = useCallback(() => {
    onToggle && onToggle(!open)
  }, [open, onToggle])

  const closeMenu = useCallback(() => {
    onToggle && onToggle(false)
  }, [onToggle])

  const containerRef = useRef<HTMLDivElement>(null)
  useClickOutside(closeMenu, [containerRef])

  // @note: Quick fix to dont push the content using position sticky with scroll 0
  useEffect(() => {
    for (const el of [
      containerRef.current?.parentElement,
      document.documentElement,
    ]) {
      if (!!open && el?.scrollTop === 0) el.scrollTop++
      if (!open && el?.scrollTop === 1) el.scrollTop--
    }

    document.documentElement.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  const { ref, shouldMount, state } = useTransitionedEnterExit({
    onOff: !!open,
  })
  const $isOpen = state === 'enter'

  return (
    <StyledNavbarContainer
      {...{
        $breakpoint,
        $height,
        $isOpen,
        ...rest,
      }}
      ref={containerRef}
    >
      <StyledHeadingContainer>
        <StyledMobileTopContainer>
          <Button
            color="main0"
            variant="secondary"
            kind="neon"
            size="regular"
            onClick={toggleMenu}
          >
            {!open ? <Icon name="bars" /> : <Icon name="close" />}
          </Button>
        </StyledMobileTopContainer>
        {logo && <StyledLogoContainer>{logo}</StyledLogoContainer>}
        {mobileTopContent && (
          <StyledMobileTopContainer>
            {mobileTopContent}
          </StyledMobileTopContainer>
        )}
      </StyledHeadingContainer>
      {shouldMount && (
        <StyledNavContainer ref={ref}>{children}</StyledNavContainer>
      )}
    </StyledNavbarContainer>
  )
}
Navbar.displayName = 'Navbar'

export default memo(Navbar) as typeof Navbar
