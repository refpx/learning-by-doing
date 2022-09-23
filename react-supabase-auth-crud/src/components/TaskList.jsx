import { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
import TaskCard from './TaskCard'

function TaskList({ done = false }) {
  const { tasks, getTasks, loading } = useTasks()

  useEffect(() => {
    getTasks(done)
  }, [done])

  function renderTask() {
    if (loading) {
      return <p>Loading...</p>
    } else if (tasks.length === 0) {
      return <p>No tasks found</p>
    } else {
      return (
        <div>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )
    }
  }

  return <div>{renderTask()}</div>
}

export default TaskList
