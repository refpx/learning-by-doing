import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function TaskCard({ task }) {
  const router = useRouter()
  const { deleteTask } = useTasks()

  return (
    <div
      className='bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-md mb-4 cursor-pointer'
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <div className='flex justify-between'>
        <h2>{task.title}</h2>
        <button
          onClick={(e) => {
            e.stopPropagation()
            deleteTask(task.id)
            toast.success('Task deleted successfully')
          }}
          className='bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded-md'
        >
          Delete
        </button>
      </div>
      <p className='text-gray-300'>{task.description}</p>
      <span className='text-gray-400 text-xs'>{task.id}</span>
    </div>
  )
}
export default TaskCard
