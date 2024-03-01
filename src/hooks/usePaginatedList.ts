import { useCallback, useEffect, useMemo, useState } from 'react'
import { sleep } from '../utils'

export type UsePaginatedListProps<T> = {
  itemsPerPage?: number
  delay?: number
  list?: T[]
  resetDeps?: any[]
}

export type UsePaginatedListReturn<T> = {
  list?: T[]
  loadItemsDisabled: boolean
  handleLoadItems: () => Promise<void>
}

export function usePaginatedList<T>({
  itemsPerPage = 10,
  delay = 200,
  list,
  resetDeps = [list],
}: UsePaginatedListProps<T>): UsePaginatedListReturn<T> {
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...resetDeps])

  const output = useMemo(() => {
    if (!list) return
    return list.slice(0, page * itemsPerPage)
  }, [itemsPerPage, list, page])

  const loadItemsDisabled = useMemo(() => {
    if (!list) return true
    if (!output) return false

    return output.length >= list.length
  }, [list, output])

  const handleLoadItems = useCallback(async () => {
    if (loadItemsDisabled) return

    // @note: It should have a little delay to trigger the intersection observer without bugs
    await sleep(delay)

    setPage((prev) => prev + 1)
  }, [delay, loadItemsDisabled])

  return {
    loadItemsDisabled,
    list: output,
    handleLoadItems,
  }
}
