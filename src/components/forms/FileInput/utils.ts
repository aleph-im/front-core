export type ExtFile = File & {
  dirName?: string
  level?: number
}

export type ValidationOptions = {
  directory?: boolean
  multiple?: boolean
}

export async function getFilesAsync(
  dataTransfer: DataTransfer,
  options?: ValidationOptions,
): Promise<ExtFile[]> {
  const items = [...dataTransfer.items].filter((item) => item.kind === 'file')
  if (!items.length) return []

  if (typeof items[0].webkitGetAsEntry === 'function') {
    const entries = [...items]
      .map((item) => item.webkitGetAsEntry())
      .filter((file): file is FileSystemEntry => !!file)

    // Validate entry types before traversing
    if (options) {
      const error = validateEntries(entries, options)
      if (error) throw error
    }

    const files: ExtFile[] = []

    for (const entry of entries) {
      const entryContent = await readEntry(entry)
      files.push(...entryContent)
    }

    return files
  } else {
    return items
      .map((item) => item.getAsFile())
      .filter((file): file is ExtFile => !!file)
  }
}

function validateEntries(
  entries: FileSystemEntry[],
  { directory, multiple }: ValidationOptions,
): Error | undefined {
  const directories = entries.filter((entry) => entry.isDirectory)
  const files = entries.filter((entry) => entry.isFile)

  const totalItems = entries.length

  if (!multiple && totalItems > 1) {
    return new Error('Only one file at a time')
  }

  if (directory && files.length > 0) {
    return new Error('Only directories are supported')
  }

  if (directory && directories.length > 1) {
    return new Error('Only one directory is supported')
  }

  return undefined
}

async function readEntry(
  entry: FileSystemEntry,
  level = 0,
  dirName = '',
): Promise<ExtFile[]> {
  const ret: ExtFile[] = []

  if (entryIsFile(entry)) {
    const file = (await readFile(entry)) as ExtFile
    file.level = level
    file.dirName = dirName
    ret.push(file)
  } else if (entryIsDirectory(entry)) {
    const entries = await readEntries(entry)
    const dirName = entry.name
    const newLevel = level + 1

    for (const entry of entries) {
      const files = await readEntry(entry, newLevel, dirName)
      ret.push(...files)
    }
  }

  return ret
}

// for TypeScript typing (type guard function)
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
function entryIsDirectory(
  entry: FileSystemEntry,
): entry is FileSystemDirectoryEntry {
  return entry.isDirectory
}

function entryIsFile(entry: FileSystemEntry): entry is FileSystemFileEntry {
  return entry.isFile
}

function readFile(entry: FileSystemFileEntry): Promise<File> {
  return new Promise<File>((resolve) => {
    entry.file((file) => resolve(file))
  })
}

function readEntries(
  entry: FileSystemDirectoryEntry,
): Promise<FileSystemEntry[]> {
  return new Promise<FileSystemEntry[]>((resolve) => {
    const reader = entry.createReader()

    reader.readEntries((entries) => resolve(entries))
  })
}
