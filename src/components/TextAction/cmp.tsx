import React, { useState } from 'react'
import { TextActionProps, TextProps } from './types'
import { StyledTextAction, StyledText } from './styles'
import { Transition } from 'react-transition-group'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { IconName } from '@fortawesome/fontawesome-svg-core'

const duration = 150
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
type TransitionStyles = {
  entering: { opacity: number }
  entered: { opacity: number }
  exiting: { opacity: number }
  exited: { opacity: number }
}
const transitionStyles: TransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export const Text = ({ size = 18, value, color = 'main0' }: TextProps) => {
  return (
    <StyledText
      {...{
        size,
        color,
        value,
      }}
    >
      {value}
    </StyledText>
  )
}

export const TextAction = ({
  size,
  content,
  position,
  type = 'body1',
  color,
  useAction,
  icon,
}: TextActionProps) => {
  const [iconName, setIconName] = useState<IconName>(icon)
  const [iconColor, setIconColor] = useState<string>(color)
  const [showIcon, setShowIcon] = useState<boolean>(true)

  const animation = (fn: any) => {
    fn()
    setShowIcon(false)

    setTimeout(() => {
      setIconName('check')
      setIconColor('#5CFFB1')
      setShowIcon(true)

      setTimeout(() => {
        setShowIcon(false)
      }, 2000)

      setTimeout(() => {
        setIconName(icon)
        setIconColor(color)
        setShowIcon(true)
      }, 2200)
    }, duration)
  }
  return (
    <StyledTextAction
      {...{
        size,
        content,
        position,
        type,
        color,
        useAction,
        icon,
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: position,
          }}
        >
          <Text size={size} value={content} color={color}></Text>
          <Button
            onClick={() => animation(useAction)}
            variant="tertiary"
            as="a"
            color={''}
            kind={'neon'}
            size={'regular'}
            style={{ padding: '0 0 0 0.5rem' }}
          >
            <Transition in={showIcon} timeout={duration}>
              {(state: string | number) => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state as keyof TransitionStyles],
                  }}
                >
                  <Icon name={iconName} color={iconColor} />
                </div>
              )}
            </Transition>
          </Button>
        </div>
      </div>
    </StyledTextAction>
  )
}
