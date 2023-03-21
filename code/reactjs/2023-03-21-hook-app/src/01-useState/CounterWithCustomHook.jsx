import { useCounter } from '../hooks/useCounter'

export default function CounterWithCustomHook () {
  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>Counter with hook: {counter} </h1>
      <hr />
      <button onClick={() => increment(2)}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => decrement(2)}>-</button>
    </>
  )
}
