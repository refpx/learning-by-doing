import { useState } from 'react'

export default function CounterApp () {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = counter

  const handleAdd = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1
    })
  }

  return (
    <>
      <h2>Counter: {counter1}</h2>
      <h2>Counter: {counter2}</h2>
      <h2>Counter: {counter3}</h2>
      <hr />
      <button onClick={handleAdd}>+1</button>
    </>
  )
}
