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

export function debounce(cb: () => void, delay: number): () => void {
  let id: NodeJS.Timeout

  return () => {
    clearTimeout(id)
    id = setTimeout(cb, delay)
  }
}

// ---------------------

export type ByteUnit =
  | 'B'
  | 'kB'
  | 'MB'
  | 'GB'
  | 'TB'
  | 'KiB'
  | 'MiB'
  | 'GiB'
  | 'TiB'

export type ConvertBitUnitOptions<D extends boolean> = {
  from: ByteUnit
  to: ByteUnit
  displayUnit?: D
}
type R<D> = D extends true ? string : number

export const byteUnits: Record<ByteUnit, number> = {
  // byte
  B: 1,
  // kilo
  kB: 10 ** 3,
  MB: 10 ** 6,
  GB: 10 ** 9,
  TB: 10 ** 12,
  // kibi
  KiB: 2 ** 10,
  MiB: 2 ** 20,
  GiB: 2 ** 30,
  TiB: 2 ** 40,
}

export const byteUnitSubfix: Record<ByteUnit, ByteUnit> = {
  B: 'B',
  kB: 'kB',
  MB: 'MB',
  GB: 'GB',
  TB: 'TB',
  // @note: It is wrong and confusing, I know....
  KiB: 'kB',
  MiB: 'MB',
  GiB: 'GB',
  TiB: 'TB',
}

export function convertByteUnits<D extends boolean = false>(
  value: number,
  {
    from = 'MiB',
    to = 'GiB',
    displayUnit = false as D,
  }: ConvertBitUnitOptions<D>,
): R<D> {
  const result = (value * byteUnits[from]) / byteUnits[to]

  return (
    displayUnit ? `${result.toFixed(2)} ${byteUnitSubfix[to]}` : result
  ) as R<D>
}

function getHumanReadableUnit(
  value: number,
  units: ByteUnit[] = ['B', 'KiB', 'MiB', 'GiB', 'TiB'],
): ByteUnit {
  let optimalUnit: ByteUnit = 'B'

  for (const unit of units) {
    if (value < byteUnits[unit]) break
    optimalUnit = unit
  }

  return optimalUnit
}

/**
 * Converts a number of bytes to a human readable size
 */
export function humanReadableSize(
  value?: number,
  from: ByteUnit = 'B',
): string {
  if (value === Number.POSITIVE_INFINITY) return 'n/a'
  if (value === undefined) return 'n/a'
  if (value === 0) return '-'

  const bits = convertByteUnits(value, { from, to: 'B' })
  const to = getHumanReadableUnit(bits)
  return convertByteUnits(value, { from, to, displayUnit: true })
}

/**
 * Takes a string and returns a shortened version of it, with the first 6 and last 4 characters separated by '...'
 *
 * @param text A text to be shortened
 * @param start Number of chars to print from the begining
 * @param end Number of chars to print from the end
 * @returns A shortened text
 */
export const ellipseText = (text: string, start = 10, end = 0) => {
  if (text.length <= start) return text
  if (text.length <= end) return text
  return `${text.slice(0, start)}...${end > 0 ? text.slice(-end) : ''}`
}
