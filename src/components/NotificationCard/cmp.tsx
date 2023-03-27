import React from 'react'
import Icon from '../Icon'
import { StyledContentContainer, StyledFooterContainer, StyledHeaderContainer, StyledContainer, StyledHeaderIcon, StyledHeaderCloseIcon } from './styles'
import { NotificationCardProps } from './types'

export const NotificationCard = ({
  variant = 'success',
  title,
  text,
  detail,
  header,
  content,
  footer,
  ...rest
}: NotificationCardProps) => {

  return (
    <StyledContainer {...{ variant, ...rest }}>
      <StyledHeaderContainer>
        {header || (
          <>
            <StyledHeaderIcon variant={variant} />
            <span className='tp-h7'>{title}</span>
          </>
        )}
        <StyledHeaderCloseIcon />
      </StyledHeaderContainer>
      <StyledContentContainer {...{ variant }}>
        {content || text}
      </StyledContentContainer>
      <StyledFooterContainer {...{ variant }} >
        {footer || detail}
      </StyledFooterContainer>
    </StyledContainer>
  )
}

export default NotificationCard
