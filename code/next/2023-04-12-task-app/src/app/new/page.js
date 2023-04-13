'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'

function Page({ params }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  const { tasks, createTask, updateTask } = useTasks()
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task.title, task.description)
    }
    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === parseInt(params.id)))
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Some title'
        value={task?.title}
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='Some awesome description...'
        value={task?.description}
        onChange={handleChange}
      />
      <button type='submit'>Save</button>
    </form>
  )
}
export default Page
