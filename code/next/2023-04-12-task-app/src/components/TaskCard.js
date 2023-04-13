import { useRouter } from 'next/navigation'

function TaskCard({ task }) {
  const router = useRouter()

  return (
    <div
      style={{ background: '#ddd', color: '#000' }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h2>{task.title}</h2>
      <button>Delete</button>
      <p>{task.description}</p>
    </div>
  )
}
export default TaskCard
