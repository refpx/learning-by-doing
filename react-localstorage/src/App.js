import { useState, useEffect } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'
import { Container } from './components/Container'
import './App.css'

function App() {
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = taskName => {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(item => {
        if (item.name === task.name) {
          return { ...item, done: !item.done }
        }
        return item
      })
    )
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(item => !item.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem('taskItems')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('taskItems', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <main className='bg-dark vh-100 text-white'>
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={setShowCompleted}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  )
}

export default App
