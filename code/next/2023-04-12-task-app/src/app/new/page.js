'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTasks } from '@/context/TasksContext'

function Page() {
  const [task, setTask] = useState()
  const { createTask } = useTasks()
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task.title, task.description)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Some title'
        onChange={handleChange}
      />
      <textarea
        name='description'
        placeholder='Some awesome description...'
        onChange={handleChange}
      />
      <button type='submit'>Save</button>
    </form>
  )
}
export default Page
