'use client'

import TaskCard from '@/components/TaskCard'
import { useTasks } from '@/context/TasksContext'

function Page() {
  const { tasks } = useTasks()

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
export default Page
