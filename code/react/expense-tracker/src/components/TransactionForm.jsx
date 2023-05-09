import { useState } from 'react'
import { useGlobalState } from '../context/GlobalState'

export function TransactionForm () {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()

    addTransaction({
      id: 1,
      description,
      amount
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter a description...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='number'
          step={0.01}
          placeholder='00.00'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type='submit'>Add Transaction</button>
      </form>
    </div>
  )
}
