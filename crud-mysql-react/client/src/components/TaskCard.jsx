import { useNavigate } from 'react-router-dom'
import { useTasks } from '../context/TaskContext'

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks()
  const navigate = useNavigate()

  const handleDone = async () => {
    await toggleTaskDone(task.id)
  }

  return (
    <div className='bg-slate-200 rounded-md p-4'>
      <header className='flex justify-between'>
        <h3 className='text-sm font-bold'>{task.title}</h3>
        <span>{task.done == 1 ? '✔️' : '❌'}</span>
      </header>
      <p className='text-xs'>{task.description}</p>
      <span>{task.createAt}</span>
      <div className='flex gap-x-2'>
        <button
          className='bg-red-700 px-2 py-1 rounded-md text-white'
          onClick={() => deleteTask(task.id)}>
          Delete
        </button>
        <button
          className='bg-green-500 px-2 py-1 rounded-md text-white'
          onClick={() => navigate(`/edit/${task.id}`)}>
          Edit
        </button>
        <button
          className='bg-slate-700 px-2 py-1 rounded-md text-white'
          onClick={() => handleDone(task.done)}>
          Toggle task
        </button>
      </div>
    </div>
  )
}

export default TaskCard
