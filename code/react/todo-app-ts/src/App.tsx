import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1 : lorem ipsum dolor sit amet',
    completed: true
  },
  {
    id: '2',
    title: 'todo 2: consectetur adipiscing elit',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3: sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}
export default App
