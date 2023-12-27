import React, { HTMLAttributes, memo, useMemo } from 'react'
import Avatar from '../../common/Avatar'
import { ImageComponent } from '../../../types'

export type NodeAvatarProps = Pick<HTMLAttributes<HTMLElement>, 'style'> & {
  apiServer?: string
  Image?: ImageComponent
  picture?: string
  src?: string
  size?: 'md' | 'lg'
}

export const NodeAvatar = ({
  picture,
  src: srcProp,
  size = 'md',
  Image = (props) => <img {...props} />,
  apiServer,
  style,
  ...rest
}: NodeAvatarProps) => {
  const imgSize = useMemo(() => (size === 'md' ? 24 : 48), [size])

  const styleSize = useMemo(() => {
    const width = size === 'md' ? '1.5rem' : '3rem'
    return {
      borderRadius: '50%',
      width,
      height: width,
      ...style,
    }
  }, [size, style])

  const src = useMemo(
    () =>
      srcProp ||
      (apiServer && picture
        ? `${apiServer}/api/v0/storage/raw/${picture}`
        : undefined),
    [apiServer, picture, srcProp],
  )

  return (
    <>
      {src ? (
        <Image
          {...{
            src,
            alt: 'Node profile image',
            width: imgSize,
            height: imgSize,
            style: styleSize,
            ...rest,
          }}
        />
      ) : (
        <Avatar {...{ ...rest, style: styleSize }} />
      )}
    </>
  )
}
NodeAvatar.displayName = 'NodeAvatar'

export default memo(NodeAvatar) as typeof NodeAvatar
