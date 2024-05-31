import React, { memo } from 'react'
import {
  StyledContentContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledContainer,
  StyledHeaderCloseIcon,
  StyledHeaderActions,
} from './styles'
import { ModalCardProps } from './types'
import TextGradient from '../TextGradient'

export const ModalCard = ({
  title,
  text,
  header,
  content,
  footer,
  width: $width,
  height: $height,
  onClose,
  ...rest
}: ModalCardProps) => {
  return (
    <StyledContainer {...{ $width, $height, ...rest }}>
      <StyledHeaderContainer>
        {header || <TextGradient type="h6">{title}</TextGradient>}
        <StyledHeaderActions>
          <StyledHeaderCloseIcon onClick={onClose} />
        </StyledHeaderActions>
      </StyledHeaderContainer>
      <StyledContentContainer>{content || text}</StyledContentContainer>
      <StyledFooterContainer>{footer}</StyledFooterContainer>
    </StyledContainer>
  )
}
ModalCard.displayName = 'ModalCard'

export default memo(ModalCard) as typeof ModalCard
