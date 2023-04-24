import { createContext, useContext } from 'react'
import { AppState, PropsProvider } from '../interfaces/interfaces'

const state: AppState = {
  name: 'Black Widow',
  url: 'https://www.marvel.com/movies/black-widow',
  time: '2h 14m',
}

type State = {
  state: AppState
}

// 1. Create a context
export const AppContext = createContext<State>({} as State)

// 2. Create a provider
export const AppProvider = ({ children }: PropsProvider) => {
  return <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
}

// 3. Use the context in a component
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider')
  }
  return context
}
