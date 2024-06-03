export type ExtFile = File & {
  dirName?: string
  level?: number
}

export async function getFilesAsync(
  dataTransfer: DataTransfer,
): Promise<ExtFile[]> {
  const items = [...dataTransfer.items].filter((item) => item.kind === 'file')
  if (!items.length) return []

  if (typeof items[0].webkitGetAsEntry === 'function') {
    const entries = [...items]
      .map((item) => item.webkitGetAsEntry())
      .filter((file): file is FileSystemEntry => !!file)
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

// export function isFile(maybeFile: File): Promise<boolean> {
//   return new Promise<boolean>((resolve) => {
//     if (maybeFile.type !== '') {
//       return resolve(true)
//     }
//     const reader = new FileReader()
//     reader.onloadend = () => {
//       if (
//         reader.error &&
//         (reader.error.name === 'NotFoundError' ||
//           reader.error.name === 'NotReadableError')
//       ) {
//         return resolve(false)
//       }
//       resolve(true)
//     }
//     reader.readAsArrayBuffer(maybeFile)
//   })
// }

export async function checkFilesAndDirectories(
  files: ExtFile[],
  {
    directory,
    multiple,
  }: {
    directory?: boolean
    multiple?: boolean
  },
): Promise<Error | undefined> {
  const uniqueDirectoriesMap = files
    .filter((file) => file.level === 1)
    .reduce((ac, cv) => {
      if (!cv.dirName) return ac
      ac[cv.dirName] = true
      return ac
    }, {} as Record<string, boolean>)

  const nFolders = Object.keys(uniqueDirectoriesMap).length
  const nFiles = files.filter(
    (file) =>
      file.level !== 1 || (file.dirName && !uniqueDirectoriesMap[file.dirName]),
  ).length

  const totalFiles = nFolders + nFiles

  if (!multiple && totalFiles > 1) {
    return new Error('Only one file at a time')
  }

  if (directory && nFiles > 0) {
    return new Error('Only directories are supported')
  }

  if (directory && nFolders > 1) {
    return new Error('Only one directory is supported')
  }

  // if (!directory && nFolders > 0) {
  //   return new Error('Directories are not supported')
  // }
}
