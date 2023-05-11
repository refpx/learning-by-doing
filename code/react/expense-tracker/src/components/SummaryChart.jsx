import { Legend, DonutChart } from '@tremor/react'
import { useGlobalState } from '../context/GlobalState'

const summarizeTransactions = (transactions) => {
  const formattedTransactions = transactions.reduce((acc, transaction) => {
    if (acc[transaction.type]) {
      acc[transaction.type].amount += transaction.amount
    } else {
      acc[transaction.type] = {
        type: transaction.type,
        amount: transaction.amount
      }
    }
    return acc
  }, {})

  Object.values(formattedTransactions).forEach((transaction) => {
    if (transaction.type === 'expense') {
      transaction.amount = -transaction.amount
    }
  })

  return Object.values(formattedTransactions)
}

export function SummaryChart () {
  const { transactions } = useGlobalState()
  const newTransactions = summarizeTransactions(transactions)

  return (
    <>
      {newTransactions.length > 0 && (
        <>
          <Legend
            categories={[...new Set(transactions.map((transaction) => transaction.type))]}
          />
          <DonutChart
            className='my-4'
            data={newTransactions}
            category='amount'
            index='type'
            showTooltip={false}
            label={`$ ${transactions.reduce((acc, transaction) => acc + transaction.amount, 0)}`}
          />
        </>
      )}
    </>
  )
}
