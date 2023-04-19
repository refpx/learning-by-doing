'use client' // this is a client-side only file

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createContext, useContext } from 'react'

// 1. Create a context
export const TaskContext = createContext()

// 2. Create a provider to wrap the app
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const createTask = (title, description) =>
    setTasks([...tasks, { id: tasks.length + 1, title, description }])

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)])

  const updateTask = (id, updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === parseInt(id) ? { ...task, ...updatedTask } : task
      ),
    ])
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
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
