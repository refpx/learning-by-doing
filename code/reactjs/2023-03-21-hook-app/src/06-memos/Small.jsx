import { memo } from 'react'

export function Small ({ value }) {
  console.log('render small component')
  return (
    <small>{value}</small>
  )
}

export const MemoizedSmall = memo(Small)
