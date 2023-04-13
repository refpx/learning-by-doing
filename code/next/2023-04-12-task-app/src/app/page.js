'use client'

import TaskCard from '@/components/TaskCard'
import { useTasks } from '@/context/TasksContext'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
export default page
