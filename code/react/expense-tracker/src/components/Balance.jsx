import { Flex, Text } from '@tremor/react'
import { useGlobalState } from '../context/GlobalState'

export function Balance () {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <Flex>
      <Text color='black'>Your Balance</Text>
      <Text color='black' className='font-extrabold text-xl'>$. {total}</Text>
    </Flex>
  )
}
