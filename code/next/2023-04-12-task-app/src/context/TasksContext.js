'use client' // this is a client-side only file

import { createContext, useContext, useState } from 'react'

// 1. Create a context
export const TaskContext = createContext()

// 2. Create a provider to wrap the app
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description 4',
    },
  ])

  const createTask = (title, description) =>
    setTasks([...tasks, { id: tasks.length + 1, title, description }])

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}

// 3. Create a custom hook to access the context
export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) throw new Error('useTasks must be used within a TaskProvider')
  return context
}
