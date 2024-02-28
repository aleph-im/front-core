/**
 * Transforms a number into a multiple of 1000 with a suffix, (ex: 625217 -> 625.2K)
 */
export const humanReadableCurrency = (value?: number): string => {
  if (value === undefined) return 'n/a'

  const [val, subfix] =
    value === 0 || value < 1_000
      ? [value, '']
      : value < 10 ** 6
      ? [value / 1_000, 'K']
      : value < 10 ** 9
      ? [value / 10 ** 6, 'M']
      : [value / 10 ** 9, 'B']

  return formatCurrency(val) + subfix
}

export const formatCurrency = (value?: number) => {
  if (!value) return '0.00'
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
    value,
  )
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
