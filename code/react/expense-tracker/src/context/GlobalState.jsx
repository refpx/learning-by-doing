import { useReducer, useContext, createContext } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider')
  }
  return context
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <Context.Provider value={{ transactions: state.transactions, addTransaction }}>
      {children}
    </Context.Provider>
  )
}
