import { List, Text } from '@tremor/react'
import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

export function TransactionList () {
  const { transactions } = useGlobalState()
  return (
    <>
      <Text
        className='text-3xl font-bold text-[#D9D9D9]'
      >
        {transactions.length > 0 ? 'History' : 'No transactions yet'}
      </Text>
      <List className='mt-2'>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </List>
    </>
  )
}
