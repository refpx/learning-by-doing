import { useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useTasks } from '../context/TaskContext'

function TasksPage() {
  const { tasks, loadTasks } = useTasks()

  useEffect(() => {
    loadTasks()
  }, [])

  const renderMain = () => {
    if (tasks.length === 0) {
      return <h2>No tasks</h2>
    }
    return tasks.map(task => <TaskCard key={task.id} task={task} />)
  }

  return (
    <div>
      <h2 className='text-5xl text-white font-bold text-center'>Tasks</h2>
      <div className='grid grid-cols-3 gap-2'>{renderMain()}</div>
    </div>
  )
}

export default TasksPage
