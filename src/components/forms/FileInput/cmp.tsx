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
} from 'react'
import { FileInputProps } from './types'
import { StyledContainer, StyledFileInput } from './styles'
import { ChipItem } from '../ChipInput'
import Button from '../../common/Button'
import FormError from '../FormError'
import FormLabel from '../FormLabel'
import Icon from '../../common/Icon'
import { humanReadableSize } from '../../../utils'

function isFile(maybeFile: File): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    if (maybeFile.type !== '') {
      return resolve(true)
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      if (
        reader.error &&
        (reader.error.name === 'NotFoundError' ||
          reader.error.name === 'NotReadableError')
      ) {
        return resolve(false)
      }
      resolve(true)
    }
    reader.readAsArrayBuffer(maybeFile)
  })
}

export const FileInput = forwardRef(
  (
    {
      onChange,
      value,
      error,
      label,
      onlyFolders,
      onlyFiles,
      multiple,
      ...rest
    }: FileInputProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleFiles = useCallback(
      async (files: FileList | File[] | null) => {
        if (!files) return

        if (!multiple && files.length > 1) {
          setDragError(new Error('Only one file at a time'))
          return
        }

        const checks = await Promise.all(Array.from(files).map(isFile))

        const folders = checks.filter((isFile) => !isFile).length
        const notFolders = checks.filter((isFile) => !!isFile).length

        if (onlyFolders && notFolders > 0) {
          setDragError(new Error('Only folders are supported'))
          return
        }

        if (onlyFiles && folders > 0) {
          setDragError(new Error('Folders are not supported'))
          return
        }

        const newValue = files ? (multiple ? [...files] : files[0]) : undefined
        onChange(newValue)
      },
      [onChange, onlyFiles, onlyFolders, multiple],
    )

    const handleClick = useCallback(() => {
      if (!inputRef.current) return
      inputRef.current.click()
    }, [])

    const handleRemoveFile = useCallback(
      (name?: string) => {
        if (!inputRef.current) return
        if (!value) return

        if (name === undefined) {
          inputRef.current.value = ''
          onChange(undefined)
          return
        }

        const values = Array.isArray(value) ? value : [value]
        const newValue = values.filter((item) => item.name !== name)
        onChange(newValue)
      },
      [onChange, value],
    )

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target as HTMLInputElement
        handleFiles(files)
      },
      [handleFiles],
    )

    useEffect(() => {
      if (inputRef.current) {
        if (onlyFolders) {
          inputRef.current.setAttribute('directory', '')
          inputRef.current.setAttribute('webkitdirectory', '')
        } else {
          inputRef.current.removeAttribute('directory')
          inputRef.current.removeAttribute('webkitdirectory')
        }
      }
    }, [onlyFolders])

    const [isDragging, setIsDragging] = useState(false)
    const [dragError, setDragError] = useState<Error>()

    const handlePreventDefault = useCallback((e: any) => {
      e.preventDefault()
      e.stopPropagation()
    }, [])

    const handleDragOn = useCallback((e: any) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(true)
    }, [])

    const handleDragOff = useCallback((e: any) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    }, [])

    const handleDrop = useCallback(
      (e: any) => {
        handleDragOff(e)
        handleFiles(e.dataTransfer.files)
      },
      [handleDragOff, handleFiles],
    )

    const values = useMemo(
      () => (value ? (Array.isArray(value) ? value : [value]) : undefined),
      [value],
    )

    error = error || dragError

    return (
      <div tabIndex={-1} ref={ref}>
        {label && <FormLabel label={label} error={error} required />}
        {!!values?.length && (
          <div tw="flex gap-2 flex-wrap">
            {values.map((file) => {
              const name = !onlyFolders
                ? file.name
                : file?.webkitRelativePath.split('/')[0]

              const size = file.size / 1024 ** 2

              const tag = (
                <div>
                  {name}
                  <span className="fs-12" tw="ml-1 opacity-70">
                    {humanReadableSize(size, 'MiB')}
                  </span>
                </div>
              )

              return (
                <ChipItem
                  key={file.name}
                  onRemove={() => handleRemoveFile(file.name)}
                  id={name}
                  tag={tag}
                />
              )
            })}
          </div>
        )}
        {!values?.length && (
          <StyledContainer
            $isDragging={isDragging}
            onDrag={handlePreventDefault}
            onDragStart={handlePreventDefault}
            onDragEnd={handlePreventDefault}
            onDragEnter={handlePreventDefault}
            onDragOver={handleDragOn}
            onDragLeave={handleDragOff}
            onDrop={handleDrop}
          >
            {!isDragging ? (
              <>
                Drag your {onlyFolders ? 'folder' : 'file'} here or{' '}
                <Button
                  onClick={handleClick}
                  type="button"
                  size="md"
                  variant="textOnly"
                  tw="mx-1.5! mt-0.5!"
                >
                  Upload {onlyFolders ? 'Folder' : 'File'}
                </Button>
                <Icon name="arrow-up" />
              </>
            ) : (
              <>
                Drop your {onlyFolders ? 'folder' : 'file'} here
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
