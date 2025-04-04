import React, { memo } from 'react'
import {
  StyledLink,
  StyledButton,
  StyledFooter,
  StyledContainer,
  StyledLinkTitle,
} from './styles'
import { FooterLinkList, FooterProps } from './types'
import Logo from '../../common/Logo'
import Icon from '../../common/Icon'
import { LinkComponent } from '../../../types'

export const FooterLinks = ({
  Link,
  links,
}: {
  Link: LinkComponent
  links: FooterLinkList[]
}) => {
  return (
    <>
      {links.map((l, i) => (
        <div key={l.title || i} tw="flex flex-col gap-4">
          {l.title && <StyledLinkTitle>{l.title}</StyledLinkTitle>}

          <ul tw="flex flex-col gap-3">
            {l.links.map((ll) => (
              <li key={ll.href}>
                <Link
                  href={ll.href}
                  target={ll.target}
                  route={{ href: ll.href }}
                >
                  <StyledLink>{ll.label}</StyledLink>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
FooterLinks.displayName = 'FooterLinks'

export const Footer = ({
  small: $small = false,
  buttons,
  media,
  mainLinks,
  links,
  Link = 'a' as unknown as LinkComponent,
  logoHref = '/',
  logoTarget,
  logoImg,
  logoByAleph,
  maxWidth: $maxWidth,
  breakpoint: $breakpoint = 'md',
  ...rest
}: FooterProps) => {
  return (
    <StyledFooter {...{ $small, ...rest }}>
      <StyledContainer {...{ $maxWidth, $breakpoint }}>
        {$small ? (
          <div tw="flex items-center justify-between flex-wrap gap-10">
            <div tw="w-full flex-auto lg:flex-1">
              <Logo
                size={28}
                text
                Link={Link}
                href={logoHref}
                target={logoTarget}
                img={logoImg}
                byAleph={logoByAleph}
              />
            </div>

            <ul tw="w-full flex-auto md:flex-1 h-full flex flex-col gap-6 md:flex-row md:items-center lg:justify-center">
              {mainLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.target}
                    route={{ href: l.href }}
                  >
                    <StyledLink className="fs-18">
                      {l.label}
                      <Icon size="lg" name="external-link-square-alt" />
                    </StyledLink>
                  </Link>
                </li>
              ))}
            </ul>

            <ul tw="w-full flex-auto md:flex-1 flex-1 h-full flex items-center gap-6 md:justify-end">
              {media
                .filter((m) => m.small)
                .map((m) => (
                  <li key={m.name}>
                    <Link
                      href={m.href}
                      target={m.target}
                      route={{ href: m.href }}
                    >
                      <StyledLink className="fs-18">
                        <Icon size="lg" name={m.icon} />
                        {m.label}
                      </StyledLink>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ) : (
          <div>
            <div tw="mb-12">
              <Logo
                size={55}
                text
                Link={Link}
                href={logoHref}
                target={logoTarget}
              />
            </div>
            <nav tw="m-0 flex flex-wrap gap-10 justify-between">
              <div tw="flex-auto w-full lg:flex-none lg:w-auto flex flex-col gap-6 items-start">
                {buttons.map((b) => (
                  <StyledButton
                    key={b.href}
                    {...{
                      href: b.href,
                      target: b.target,
                      ...b.props,
                    }}
                  >
                    {b.label}
                  </StyledButton>
                ))}
              </div>

              <div tw="flex-auto w-full lg:flex-none lg:w-auto flex flex-col gap-10 lg:gap-10 items-start">
                <FooterLinksMemo
                  Link={Link}
                  links={links.slice(0, links.length / 2)}
                />
              </div>

              <div tw="flex-auto w-full lg:flex-none lg:w-auto flex flex-col gap-10 lg:gap-10 items-start">
                <FooterLinksMemo
                  Link={Link}
                  links={links.slice(links.length / 2)}
                />
              </div>

              <ul tw="flex-auto w-full lg:flex-none lg:w-auto flex flex-col gap-6 items-start">
                {media.map((m) => (
                  <li key={m.name}>
                    <Link
                      href={m.href}
                      target={m.target}
                      route={{ href: m.href }}
                    >
                      <StyledLink className="fs-18">
                        <Icon size="lg" name={m.icon} />
                        {m.label}
                      </StyledLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </StyledContainer>
    </StyledFooter>
  )
}
Footer.displayName = 'Footer'

export const FooterLinksMemo = memo(FooterLinks) as typeof FooterLinks
export default memo(Footer) as typeof Footer
