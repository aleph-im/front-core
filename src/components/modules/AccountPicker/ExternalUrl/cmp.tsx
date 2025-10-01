import React, { memo } from 'react'
import { ExternalUrlProps } from './types'
import Button from '../../../common/Button'
import Icon from '../../../common/Icon'

export const ExternalUrl = ({ Link, text, url }: ExternalUrlProps) => {
  return (
    <Button size="sm" variant="textOnly">
      <Link href={url} target="_blank" route={{ href: url }}>
        {text}
        <Icon size="md" name="external-link-square-alt" tw="ml-1" />
      </Link>
    </Button>
  )
}

ExternalUrl.displayName = 'ExternalUrl'

export default memo(ExternalUrl) as typeof ExternalUrl
