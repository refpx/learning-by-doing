import { useTasks } from '@/context/TasksContext'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

function TaskCard({ task }) {
  const router = useRouter()
  const { deleteTask } = useTasks()

  return (
    <div
      style={{ background: '#ddd', color: '#000' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteTask(task.id)
          toast.success('Task deleted successfully')
        }}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  )
}
export default TaskCard
