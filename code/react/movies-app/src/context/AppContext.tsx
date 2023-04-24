import { createContext, useContext } from 'react'
import { PropsProvider } from '../interfaces/interfaces'

// 1. Create a context
export const AppContext = createContext({})

// 2. Create a provider
export const AppProvider = ({ children }: PropsProvider) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

// 3. Use the context in a component
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
