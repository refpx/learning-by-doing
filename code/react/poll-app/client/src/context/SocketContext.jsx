import { createContext, useContext } from 'react'
import { useSocket } from '../hooks/useSocket'

// 1. Create a context to share the socket object
export const SocketContext = createContext()

// 2. Create a provider to wrap the app and share the socket object
export const SocketProvider = ({ children }) => {
  const { socket, status } = useSocket('http://localhost:8080')

  return (
    <SocketContext.Provider value={{ socket, status }}>
      {children}
    </SocketContext.Provider>
  )
}

// 3. Create a hook to use the socket object
export const useSocketContext = () => {
  const context = useContext(SocketContext)

  if (!context) throw new Error('useSocketContext must be used within a SocketProvider')

  return context
}
