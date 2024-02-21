import React, { memo } from 'react'
import {
  StyledContentContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledContainer,
  StyledHeaderIcon,
  StyledHeaderCloseIcon,
  StyledHeaderCloseProgress,
  StyledHeaderActions,
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
  progress = 0,
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
        <StyledHeaderActions>
          <StyledHeaderCloseProgress $progress={progress} />
          <StyledHeaderCloseIcon onClick={onClose} />
        </StyledHeaderActions>
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
NotificationCard.displayName = 'NotificationCard'

export default memo(NotificationCard) as typeof NotificationCard
