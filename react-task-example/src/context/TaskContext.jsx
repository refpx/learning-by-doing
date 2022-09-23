import { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../utils/tasks'

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const createTask = task => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}>
      {children}
    </TaskContext.Provider>
  )
}
