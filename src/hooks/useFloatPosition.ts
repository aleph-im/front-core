/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, RefObject, useMemo } from 'react'
import { useBounds } from './useBounds'

export type FloatPositionType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type FloatPosition = { x: number; y: number }

export type UseFloatPositionProps<E extends HTMLElement> = {
  my: FloatPositionType
  at: FloatPositionType
  margin?: FloatPosition
  offset?: FloatPosition
  targetRef?: RefObject<E>
  floaterRef?: RefObject<E>
  deps?: any[]
}

export type UseFloatPositionReturn<E extends HTMLElement> = {
  position: FloatPosition
  targetRef: RefObject<E>
  floaterRef: RefObject<E>
}

export function useFloatPosition<E extends HTMLElement>({
  my,
  at,
  targetRef,
  floaterRef,
  margin = { x: 5, y: 5 },
  offset = { x: 0, y: 0 },
  deps = [],
}: UseFloatPositionProps<E>): UseFloatPositionReturn<E> {
  const defaultTargetRef = useRef<E>(null)
  const defaultFloaterRef = useRef<E>(null)

  targetRef = targetRef || defaultTargetRef
  floaterRef = floaterRef || defaultFloaterRef

  const { bounds: targetBounds } = useBounds({
    ref: targetRef,
    deps,
  })

  const { bounds: floaterBounds } = useBounds({
    ref: floaterRef,
    deps,
  })

  const position: FloatPosition = useMemo(() => {
    const [myPosY, myPosX] = my.split('-')
    const [atPosY, atPosX] = at.split('-')

    const {
      x: atX,
      y: atY,
      width: atW,
      height: atH,
    } = targetBounds || { x: 0, y: 0, width: 0, height: 0 }
    const { width: myW, height: myH } = floaterBounds || {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }

    const targetX =
      atPosX === 'left' ? atX : atPosX === 'center' ? atX + atW / 2 : atX + atW
    const targetY =
      atPosY === 'top' ? atY : atPosY === 'center' ? atY + atH / 2 : atY + atH

    const tooltipOffsetX =
      myPosX === 'left'
        ? margin.x
        : myPosX === 'center'
        ? -(myW / 2)
        : -(myW + margin.x)
    const tooltipOffsetY =
      myPosY === 'top'
        ? margin.y
        : myPosY === 'center'
        ? -(myH / 2)
        : -(myH + margin.y)

    const x = targetX + tooltipOffsetX + offset.x
    const y = targetY + tooltipOffsetY + offset.y

    return { x, y }
  }, [at, my, targetBounds, floaterBounds, offset, margin])

  return { position, targetRef, floaterRef }
}
