import { Grid, Col, Card, Text, Divider } from '@tremor/react'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionForm } from './components/transactions/TransactionForm'
import { TransactionList } from './components/transactions/TransactionList'
import { GlobalProvider } from './context/GlobalState'

function App () {
  return (
    <GlobalProvider>
      <main className='max-w-4xl mx-auto flex items-center justify-center h-screen'>
        <Card className='bg-[#222326] border border-[#222326] ring-0'>
          <Grid numCols={3} className='gap-2'>
            <Col>
              <Card className='bg-[#F2E96D] ring-0 flex flex-col gap-2'>
                <Text
                  className='text-3xl font-bold mb-2'
                  color='black'
                >
                  Expense Tracker
                </Text>
                <IncomeExpenses />
                <Balance />
                <Divider className='my-2 bg-[#393941] h-[0.1rem]' />
                <TransactionForm />
              </Card>
            </Col>
            <Col numColSpan={2}>
              <Card className='ring-0 bg-[#393941]'>
                <Text
                  className='text-3xl font-bold text-[#D9D9D9]'
                >
                  History
                </Text>
                <TransactionList />
              </Card>
            </Col>

          </Grid>

        </Card>

      </main>
    </GlobalProvider>
  )
}
export default App
