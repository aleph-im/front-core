export function addClasses<T extends { className?: string }>(
  className: string,
): (props: T) => T & { className?: string } {
  return (props: T) => ({
    ...props,
    className: `${props.className || ''} ${className}`,
  })
}
