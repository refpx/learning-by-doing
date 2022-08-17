import { useTasks } from '../context/TaskContext'

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useTasks()

  const handleDelete = () => {
    deleteTask(task.id)
  }

  const handleToggleDone = () => {
    updateTask(task.id, { done: !task.done })
  }

  return (
    <div className='card card-body mb-2'>
      <h2 className='h5'>{`${task.id}. ${task.name}`}</h2>
      <p>{task.done ? 'Done ✅' : 'Not done ❌'}</p>
      <div className='ms-auto'>
        <button
          className='btn btn-sm btn-danger me-1'
          onClick={() => handleDelete()}>
          Delete
        </button>
        <button
          className='btn btn-sm btn-secondary'
          onClick={() => handleToggleDone()}>
          Done
        </button>
      </div>
    </div>
  )
}

export default TaskCard
