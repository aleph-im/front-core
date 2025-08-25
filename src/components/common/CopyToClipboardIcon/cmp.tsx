import React, { memo } from 'react'
import { StyledCopytoClipboardIcon } from './styles'
import { CopyToClipboardIconProps } from './types'
import { useCopyToClipboardAndNotify } from '../../../hooks'

export const CopytoClipboardIcon = ({ text }: CopyToClipboardIconProps) => {
  const handleCopy = useCopyToClipboardAndNotify(text || '')

  return <StyledCopytoClipboardIcon name="copy" onClick={handleCopy} />
}
CopytoClipboardIcon.displayName = 'CopytoClipboardIcon'

export default memo(CopytoClipboardIcon)
