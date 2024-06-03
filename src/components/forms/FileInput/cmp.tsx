import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  ClipboardEvent,
  DragEvent,
} from 'react'
import { FileInputProps } from './types'
import { StyledContainer, StyledFileInput } from './styles'
import { ChipItem } from '../ChipInput'
import Button from '../../common/Button'
import FormError from '../FormError'
import FormLabel from '../FormLabel'
import Icon, { IconName } from '../../common/Icon'
import { humanReadableSize } from '../../../utils'
import { ExtFile, checkFilesAndDirectories, getFilesAsync } from './utils'

export const FileInput = forwardRef(
  (
    {
      onChange,
      value,
      error,
      label,
      directory,
      multiple,
      ...rest
    }: FileInputProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const [isDragging, setIsDragging] = useState(false)
    const [dragError, setDragError] = useState<Error>()

    // @note: Multiple will be true if directory is true sa for directories we return an array of File
    multiple = directory || multiple

    const handleFiles = useCallback(
      async (files: ExtFile[]) => {
        if (!files.length) return
        setDragError(undefined)

        const newValue = multiple ? files : files[0]
        onChange(newValue)
      },
      [onChange, multiple],
    )

    const handleRemoveFile = useCallback(
      (name?: string) => {
        if (!inputRef.current) return
        if (!value) return

        inputRef.current.value = ''

        if (directory) {
          onChange(undefined)
          return
        }

        const files = Array.isArray(value) ? value : [value]
        const newFiles = files.filter((item) => item.name !== name)
        const newValue = newFiles.length ? newFiles : undefined

        onChange(newValue)
      },
      [onChange, directory, value],
    )

    useEffect(() => {
      if (inputRef.current) {
        if (directory) {
          inputRef.current.setAttribute('directory', '')
          inputRef.current.setAttribute('webkitdirectory', '')
        } else {
          inputRef.current.removeAttribute('directory')
          inputRef.current.removeAttribute('webkitdirectory')
        }
      }
    }, [directory])

    const handlePreventDefault = useCallback((e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
    }, [])

    const handleDragOn = useCallback((e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(true)
    }, [])

    const handleDragOff = useCallback((e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    }, [])

    const handleDrop = useCallback(
      async (e: DragEvent) => {
        handleDragOff(e)

        const files = await getFilesAsync(e.dataTransfer)
        const error = await checkFilesAndDirectories(files, {
          directory,
          multiple,
        })

        setDragError(error)
        if (error) return

        handleFiles(files)
      },
      [handleDragOff, handleFiles, directory, multiple],
    )

    const handlePaste = useCallback(
      async (e: ClipboardEvent) => {
        e.preventDefault()
        e.stopPropagation()

        const files = await getFilesAsync(e.clipboardData)
        const error = await checkFilesAndDirectories(files, {
          directory,
          multiple,
        })

        setDragError(error)
        if (error) return

        handleFiles(files)
      },
      [handleFiles, directory, multiple],
    )

    const handleChange = useCallback(
      async (e: ChangeEvent<HTMLInputElement>) => {
        const { files: fileList } = e.target as HTMLInputElement
        if (!fileList) return

        const files = ([...fileList] as ExtFile[]).map((file) => {
          file.level = 0
          file.dirName = (file.webkitRelativePath || file.name).split('/')[0]
          return file
        })

        handleFiles(files)
      },
      [handleFiles],
    )

    const handleClick = useCallback(() => {
      if (!inputRef.current) return
      inputRef.current.click()
    }, [])

    const items = useMemo(() => {
      const files = value ? (Array.isArray(value) ? value : [value]) : undefined
      if (!files || !files.length) return []

      const items = files.map((file) => ({
        id: file.name,
        name: file.name,
        size: file.size / 1024 ** 2,
        icon: 'file' as IconName,
      }))

      if (!directory) return items

      const [firstFile] = files
      const name = firstFile.dirName || 'directory'
      const size = items.reduce((ac, cv) => ac + cv.size, 0)

      return [
        {
          id: name,
          name,
          size,
          icon: 'folder' as IconName,
        },
      ]
    }, [directory, value])

    error = error || dragError

    return (
      <div>
        {label && <FormLabel label={label} error={error} required />}
        {!!items?.length && (
          <div tw="flex gap-2 flex-wrap">
            {items.map((item) => {
              const tag = (
                <div tw="flex items-center gap-2">
                  <Icon name={item.icon} />
                  <span>
                    {item.name}
                    <span className="fs-12" tw="ml-1 opacity-70">
                      {humanReadableSize(item.size, 'MiB')}
                    </span>
                  </span>
                </div>
              )

              return (
                <ChipItem
                  key={item.name}
                  id={item.name}
                  tag={tag}
                  onRemove={() => handleRemoveFile(item.name)}
                />
              )
            })}
          </div>
        )}
        {!items?.length && (
          <StyledContainer
            $isDragging={isDragging}
            onDrag={handlePreventDefault}
            onDragStart={handlePreventDefault}
            onDragEnd={handlePreventDefault}
            onDragEnter={handlePreventDefault}
            onDragOver={handleDragOn}
            onDragLeave={handleDragOff}
            onDrop={handleDrop}
            onPaste={handlePaste}
            tabIndex={0}
            ref={ref}
          >
            {!isDragging ? (
              <>
                Drag your {directory ? 'folder' : 'file'} here or{' '}
                <Button
                  onClick={handleClick}
                  type="button"
                  size="md"
                  variant="textOnly"
                  tw="mx-1.5! mt-0.5!"
                >
                  Upload {directory ? 'Folder' : 'File'}
                </Button>
                <Icon name="arrow-up" />
              </>
            ) : (
              <>
                Drop your {directory ? 'folder' : 'file'} here
                <Icon name="arrow-down" tw="ml-1.5" />
              </>
            )}
          </StyledContainer>
        )}
        {error && <FormError error={error} />}
        <StyledFileInput
          {...{
            ...rest,
            type: 'file',
            ref: inputRef,
            onChange: handleChange,
            multiple,
          }}
        />
      </div>
    )
  },
)
FileInput.displayName = 'FileInput'

export default memo(FileInput) as typeof FileInput
