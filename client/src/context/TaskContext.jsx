import { createContext, useContext, useState } from 'react'
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from '../api/tasks.api'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskContextProvider')
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const { data } = await getTasksRequest()
    setTasks(data)
  }

  const getTask = async id => {
    try {
      const { data } = await getTaskRequest(id)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const createTask = async task => {
    try {
      await createTaskRequest(task)
      // setTasks([...tasks, response.data])
    } catch (error) {
      console.log(error)
    }
  }

  const updateTask = async (id, newFields) => {
    try {
      await updateTaskRequest(id, newFields)
      // setTasks([...tasks, response.data])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTask = async id => {
    try {
      await deleteTaskRequest(id)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTaskDone = async id => {
    try {
      const taskFound = tasks.find(task => task.id === id)
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false)
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        getTask,
        deleteTask,
        createTask,
        updateTask,
        toggleTaskDone,
      }}>
      {children}
    </TaskContext.Provider>
  )
}
