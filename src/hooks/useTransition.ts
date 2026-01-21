import { useState, useEffect, useRef, useCallback } from 'react'

export type TransitionStage = 'enter' | 'entering' | 'exiting' | 'leave'

export type UseTransitionReturn = {
  stage: TransitionStage
  shouldMount: boolean
}

export function useTransition(
  state: boolean,
  duration: number,
): UseTransitionReturn {
  const [stage, setStage] = useState<TransitionStage>(() =>
    state ? 'enter' : 'leave',
  )

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const frameRef = useRef<number | null>(null)
  const prevStateRef = useRef(state)

  const clearTimers = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }
  }, [])

  useEffect(() => {
    // Only react to state changes
    if (prevStateRef.current === state) return
    prevStateRef.current = state

    clearTimers()

    if (state) {
      // Opening: leave/exiting -> entering -> enter
      // 1. Set to 'entering' (mounts component with initial CSS state)
      setStage('entering')

      // 2. After browser paints, set to 'enter' (triggers CSS transition)
      // Double rAF ensures the entering state is painted before transitioning
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = requestAnimationFrame(() => {
          setStage('enter')
        })
      })
    } else {
      // Closing: enter/entering -> exiting -> leave
      // 1. Set to 'exiting' (triggers CSS transition to hidden state)
      setStage('exiting')

      // 2. After animation completes, set to 'leave' (unmounts component)
      timeoutRef.current = setTimeout(() => {
        setStage('leave')
      }, duration)
    }
  }, [state, duration, clearTimers])

  // Cleanup on unmount
  useEffect(() => {
    return clearTimers
  }, [clearTimers])

  // shouldMount: true during entering, enter, and exiting stages
  const shouldMount = stage !== 'leave'

  return { stage, shouldMount }
}
