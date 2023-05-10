import { List } from '@tremor/react'
import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

export function TransactionList () {
  const { transactions } = useGlobalState()
  return (

    <List className='mt-2'>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </List>
  )
}
