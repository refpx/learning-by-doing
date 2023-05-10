import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

export function TransactionList () {
  const { transactions } = useGlobalState()
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  )
}
