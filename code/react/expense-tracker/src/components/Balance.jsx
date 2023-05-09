import { useGlobalState } from '../context/GlobalState'

export function Balance () {
  const data = useGlobalState()

  return (
    <div>Balance: {JSON.stringify(data)}</div>
  )
}
