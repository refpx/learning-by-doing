'use client' // this is a client-side only file

import { createContext, useContext } from 'react'

// 1. Create a context
export const TaskContext = createContext()

// 2. Create a provider to wrap the app
export const TaskProvider = ({ children }) => {
  const tasks = []

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  )
}

// 3. Create a custom hook to access the context
export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}
