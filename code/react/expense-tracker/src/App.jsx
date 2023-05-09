import { Balance } from './components/Balance'
import { Header } from './components/Header'
import { TransactionForm } from './components/TransactionForm'
import { GlobalProvider } from './context/GlobalState'

function App () {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <div>Hello World</div>

    </GlobalProvider>
  )
}
export default App
