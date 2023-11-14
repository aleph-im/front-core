import React from 'react'
import {
  StyledContentContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledContainer,
  StyledHeaderIcon,
  StyledHeaderCloseIcon,
} from './styles'
import { NotificationCardProps } from './types'

export const NotificationCard = ({
  variant = 'success',
  title,
  text,
  detail,
  header,
  content,
  footer,
  onClose,
  ...rest
}: NotificationCardProps) => {
  return (
    <StyledContainer {...{ variant, ...rest }}>
      <StyledHeaderContainer>
        {header || (
          <>
            <StyledHeaderIcon variant={variant} />
            {title}
          </>
        )}
        <StyledHeaderCloseIcon onClick={onClose} />
      </StyledHeaderContainer>
      <StyledContentContainer {...{ variant }}>
        {content || text}
      </StyledContentContainer>
      <StyledFooterContainer {...{ variant }}>
        {footer || detail}
      </StyledFooterContainer>
    </StyledContainer>
  )
}

export default NotificationCard
