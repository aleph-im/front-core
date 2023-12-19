import React, { memo } from 'react'
import {
  StyledLink,
  StyledButton,
  StyledFooter,
  StyledIcon,
  StyledIcon2,
  StyledContainer,
} from './styles'
import { FooterProps } from './types'
import { Col, Row } from '../../layout/Grid'
import Logo from '../../common/Logo'

export const Footer = ({ small = false, maxWidth, ...rest }: FooterProps) => {
  return (
    <StyledFooter {...rest}>
      <StyledContainer $maxWidth={maxWidth}>
        {small ? (
          <Row xs={1} md={2} lg={3} xsGap="3rem" lgGap="0">
            <Col xs={1} md={2} lg={1}>
              <div tw="h-full flex items-center lg:justify-start">
                <Logo size={28} />
              </div>
            </Col>
            <Col>
              <ul tw="h-full flex flex-col gap-6 md:flex-row md:items-center lg:justify-center">
                <li>
                  <StyledLink target="_blank" href="https://docs.aleph.im">
                    Documentation
                    <StyledIcon2 name="external-link-square-alt" />
                  </StyledLink>
                </li>
                <li>
                  <StyledLink target="_blank" href="https://t.me/alephim">
                    Telegram Developers
                    <StyledIcon2 name="external-link-square-alt" />
                  </StyledLink>
                </li>
              </ul>
            </Col>
            <Col>
              <ul tw="h-full flex items-center gap-6 md:justify-end">
                <li>
                  <StyledLink
                    target="_blank"
                    href="https://twitter.com/aleph_im"
                  >
                    <StyledIcon name="twitter" />
                    Twitter
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    target="_blank"
                    href="https://medium.com/aleph-im"
                  >
                    <StyledIcon name="medium" />
                    Medium
                  </StyledLink>
                </li>
              </ul>
            </Col>
          </Row>
        ) : (
          <>
            <div tw="mb-12">
              <Logo size={55} />
            </div>
            <nav tw="m-0">
              <Row xs={1} md={2} lg={4} xsGap="3rem" mdGap="1.5rem">
                <Col>
                  <StyledButton>Work with us</StyledButton>
                  <StyledButton>Try our dApps</StyledButton>
                  <StyledButton>Start a project</StyledButton>
                </Col>
                <Col>
                  <ul>
                    <li tw="mb-6">
                      <StyledLink>Solutions</StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink>Roadmap</StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink>Indexing</StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink>Demo&apos;s</StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink>Team</StyledLink>
                    </li>
                    <li tw="mb-0">
                      <StyledLink>Developers</StyledLink>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li tw="mb-6">
                      <StyledLink>Jobs</StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink>Whitepaper</StyledLink>
                    </li>
                    <li tw="mb-0">
                      <StyledLink>Token</StyledLink>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <li tw="mb-6">
                      <StyledLink
                        target="_blank"
                        href="https://twitter.com/aleph_im"
                      >
                        <StyledIcon name="twitter" />
                        Twitter
                      </StyledLink>
                    </li>
                    <li tw="mb-6">
                      <StyledLink target="_blank" href="https://t.me/alephim">
                        <StyledIcon name="telegram" />
                        Telegram
                      </StyledLink>
                    </li>
                    <li tw="mb-0">
                      <StyledLink
                        target="_blank"
                        href="https://medium.com/aleph-im"
                      >
                        <StyledIcon name="medium" />
                        Medium
                      </StyledLink>
                    </li>
                  </ul>
                </Col>
              </Row>
            </nav>
          </>
        )}
      </StyledContainer>
    </StyledFooter>
  )
}
Footer.displayName = 'Footer'

export default memo(Footer) as typeof Footer
