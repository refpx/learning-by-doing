import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleSubmit = e => {
    e.preventDefault()
    createTask({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white text-center mb-3'>
          Crea tu tarea
        </h1>
        <input
          type='text'
          placeholder='Escribre tu tarea'
          onChange={e => setTitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
          autoFocus
        />
        <textarea
          placeholder='Escribe la descripción de la tarea'
          onChange={e => setDescription(e.target.value)}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
        />
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400 w-full'>
          Guardar
        </button>
      </form>
    </div>
  )
}

export default TaskForm
