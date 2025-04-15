import { useCallback, useEffect, useMemo, useState } from 'react'
import { sleep } from '../utils'

export type UsePaginatedListProps<T> = {
  itemsPerPage?: number
  numberOfPages?: number
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
  itemsPerPage,
  numberOfPages,
  delay = 200,
  list,
  resetDeps = [list],
}: UsePaginatedListProps<T>): UsePaginatedListReturn<T> {
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...resetDeps])

  const calculatedItemsPerPage = useMemo(() => {
    if (!list) return 10

    // If itemsPerPage is defined, use it as priority
    if (itemsPerPage) return itemsPerPage

    // If numberOfPages is defined, calculate itemsPerPage
    if (numberOfPages && numberOfPages > 0) {
      return Math.ceil(list.length / numberOfPages)
    }

    // Default value
    return 10
  }, [itemsPerPage, numberOfPages, list])

  const output = useMemo(() => {
    if (!list) return

    const totalPages =
      numberOfPages || Math.ceil(list.length / calculatedItemsPerPage)
    const isLastPage = page >= totalPages

    if (isLastPage) {
      // On the last page, return all items (including any remainder)
      return list
    } else {
      // Normal paging - show items up to the current page
      return list.slice(0, page * calculatedItemsPerPage)
    }
  }, [calculatedItemsPerPage, list, page, numberOfPages])

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
