import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskForm() {
  const [taskName, setTaskName] = useState('')
  const { createTask, adding } = useTasks()

  const handleSubmit = async e => {
    e.preventDefault()
    createTask(taskName)
    setTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <input
        type='text'
        name='taskName'
        placeholder='Write a task name'
        onChange={e => setTaskName(e.target.value)}
        value={taskName}
        className='form-control mb-2'
      />
      <button className='btn btn-primary btn-sm' disabled={adding}>
        {adding ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}

export default TaskForm
