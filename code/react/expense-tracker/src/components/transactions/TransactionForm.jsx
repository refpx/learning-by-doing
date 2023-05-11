import { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'
import { TextInput, Text, Button } from '@tremor/react'

export function TransactionForm () {
  const { addTransaction } = useGlobalState()
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!description || !amount) return

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      type: amount < 0 ? 'expense' : 'income',
      amount: +amount
    })
  }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2'>
      <Text className='font-bold' color='black'>New transaction:</Text>

      <TextInput
        type='text'
        placeholder='Enter a description...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TextInput
        type='number'
        step={0.01}
        placeholder='00.00'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Button
        size='xs'
        className='text-[#D9D9D9] bg-[#222326] border-[#222326] ring-0 hover:bg-[#393941] hover:border-[#393941] focus:ring-[#393941]'
      >
        Add Transaction
      </Button>
    </form>
  )
}
