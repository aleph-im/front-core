import React, { memo } from 'react'
import NodeAvatar from '../NodeAvatar'

export type NodeNameProps = {
  hash: string
  name?: string
  picture?: string
  apiServer: string
  ImageCmp: any
}

export const NodeName = ({
  hash,
  name,
  picture,
  apiServer,
  ImageCmp,
  ...rest
}: NodeNameProps) => {
  return (
    <div tw="inline-flex gap-3 items-center" {...rest}>
      <NodeAvatar
        {...{
          picture,
          size: 'md',
          apiServer,
          ImageCmp,
        }}
      />
      <div className="fs-10" tw="leading-4">
        <div tw="whitespace-nowrap">ID: {hash.slice(-10)}</div>
        {name?.substring(0, 30)}
      </div>
    </div>
  )
}
NodeName.displayName = 'NodeName'

export default memo(NodeName) as typeof NodeName
