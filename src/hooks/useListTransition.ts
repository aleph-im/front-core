import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { TransitionStage } from './useTransition'

type ItemWithStage<T> = {
  item: T
  stage: TransitionStage
  key: string | number
}

type KeyExtractor<T> = (item: T) => string | number

function defaultKeyExtractor<T>(item: T): string | number {
  if (typeof item === 'object' && item !== null) {
    if ('id' in item) return (item as { id: string | number }).id
    if ('key' in item) return (item as { key: string | number }).key
  }
  return String(item)
}

export function useListTransition<T>(
  list: T[],
  duration: number,
  keyExtractor: KeyExtractor<T> = defaultKeyExtractor,
): (
  render: (item: T, stage: TransitionStage) => React.ReactNode,
) => React.ReactNode[] {
  const [items, setItems] = useState<ItemWithStage<T>[]>(() =>
    list.map((item) => ({
      item,
      stage: 'enter' as TransitionStage,
      key: keyExtractor(item),
    })),
  )

  const timeoutsRef = useRef<
    Map<string | number, ReturnType<typeof setTimeout>>
  >(new Map())
  const framesRef = useRef<Map<string | number, number>>(new Map())
  const prevListRef = useRef<T[]>(list)

  const clearTimersForKey = useCallback((key: string | number) => {
    const timeout = timeoutsRef.current.get(key)
    if (timeout !== undefined) {
      globalThis.clearTimeout(timeout)
      timeoutsRef.current.delete(key)
    }
    const frame = framesRef.current.get(key)
    if (frame !== undefined) {
      cancelAnimationFrame(frame)
      framesRef.current.delete(key)
    }
  }, [])

  const clearAllTimers = useCallback(() => {
    timeoutsRef.current.forEach((timeout: ReturnType<typeof setTimeout>) =>
      globalThis.clearTimeout(timeout),
    )
    timeoutsRef.current.clear()
    framesRef.current.forEach((frame: number) => cancelAnimationFrame(frame))
    framesRef.current.clear()
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return clearAllTimers
  }, [clearAllTimers])

  // Schedule entering items to transition to 'enter' after paint
  const scheduleEnter = useCallback((key: string | number) => {
    // Double rAF to ensure browser has painted the entering state
    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(() => {
        setItems((current: ItemWithStage<T>[]) =>
          current.map((i: ItemWithStage<T>) =>
            i.key === key ? { ...i, stage: 'enter' as TransitionStage } : i,
          ),
        )
        framesRef.current.delete(key)
      })
      framesRef.current.set(key, frame2)
    })
    framesRef.current.set(key, frame1)
  }, [])

  // Schedule exiting items to be removed after animation duration
  const scheduleRemove = useCallback(
    (key: string | number) => {
      const timeout = globalThis.setTimeout(() => {
        setItems((current: ItemWithStage<T>[]) =>
          current.filter((i: ItemWithStage<T>) => i.key !== key),
        )
        timeoutsRef.current.delete(key)
      }, duration)
      timeoutsRef.current.set(key, timeout)
    },
    [duration],
  )

  useEffect(() => {
    // Compare by reference first for quick check
    if (prevListRef.current === list) return

    const prevKeys = new Set<string | number>(
      prevListRef.current.map(keyExtractor),
    )
    const currentKeys = new Set<string | number>(list.map(keyExtractor))
    prevListRef.current = list

    // Check if there are actual changes
    const hasAdditions = list.some((item) => !prevKeys.has(keyExtractor(item)))
    const hasRemovals = Array.from(prevKeys).some(
      (key) => !currentKeys.has(key),
    )

    if (!hasAdditions && !hasRemovals) {
      // Only item data changed, update items without transitions
      setItems((prev: ItemWithStage<T>[]) =>
        prev.map((existing: ItemWithStage<T>) => {
          const newItem = list.find((i) => keyExtractor(i) === existing.key)
          return newItem ? { ...existing, item: newItem } : existing
        }),
      )
      return
    }

    // Compute keys to enter/remove BEFORE setItems (synchronously)
    setItems((prev: ItemWithStage<T>[]) => {
      const result: ItemWithStage<T>[] = []
      const processedKeys = new Set<string | number>()
      const keysToEnter: (string | number)[] = []
      const keysToRemove: (string | number)[] = []

      // Process existing items
      for (const existingItem of prev) {
        processedKeys.add(existingItem.key)

        if (!currentKeys.has(existingItem.key)) {
          // Item was removed - start exit animation
          if (
            existingItem.stage !== 'leave' &&
            existingItem.stage !== 'exiting'
          ) {
            clearTimersForKey(existingItem.key)
            result.push({ ...existingItem, stage: 'exiting' })
            keysToRemove.push(existingItem.key)
          } else {
            result.push(existingItem)
          }
        } else {
          // Item still exists
          const newItem = list.find(
            (i) => keyExtractor(i) === existingItem.key,
          ) as T

          if (
            existingItem.stage === 'exiting' ||
            existingItem.stage === 'leave'
          ) {
            // Item was re-added before animation finished - cancel exit, start enter
            clearTimersForKey(existingItem.key)
            result.push({ ...existingItem, item: newItem, stage: 'entering' })
            keysToEnter.push(existingItem.key)
          } else {
            // Update item data, keep stage
            result.push({ ...existingItem, item: newItem })
          }
        }
      }

      // Add new items
      for (const newItem of list) {
        const key = keyExtractor(newItem)
        if (!processedKeys.has(key)) {
          result.push({ item: newItem, stage: 'entering', key })
          keysToEnter.push(key)
        }
      }

      // Sort to maintain list order (exiting items go to end)
      const keyOrder = new Map(
        list.map((item, index) => [keyExtractor(item), index]),
      )
      result.sort((a, b) => {
        const orderA = keyOrder.get(a.key) ?? Infinity
        const orderB = keyOrder.get(b.key) ?? Infinity
        return orderA - orderB
      })

      // Schedule transitions inside the callback using setTimeout(0) to defer
      // This ensures the state update is committed before scheduling
      setTimeout(() => {
        keysToEnter.forEach(scheduleEnter)
        keysToRemove.forEach(scheduleRemove)
      }, 0)

      return result
    })
  }, [list, keyExtractor, clearTimersForKey, scheduleEnter, scheduleRemove])

  const render = useMemo(
    () =>
      (
        renderFn: (item: T, stage: TransitionStage) => React.ReactNode,
      ): React.ReactNode[] =>
        items.map(({ item, stage }: ItemWithStage<T>) => renderFn(item, stage)),
    [items],
  )

  return render
}
