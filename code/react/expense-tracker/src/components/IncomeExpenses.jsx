import { Flex, Text } from '@tremor/react'
import { useGlobalState } from '../context/GlobalState'

export function IncomeExpenses () {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1

  return (
    <section>
      <Flex>
        <Text color='black'>Income</Text>
        <Text color='black'>$. {income}</Text>
      </Flex>
      <Flex>
        <Text color='black'>Expense</Text>
        <Text color='black'>$. {expense}</Text>
      </Flex>
    </section>
  )
}
