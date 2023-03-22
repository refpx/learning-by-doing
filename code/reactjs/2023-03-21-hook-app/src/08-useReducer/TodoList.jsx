import { TodoItem } from './TodoItem'

export function TodoList ({ todos = [], handleDeleteTodo }) {
  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      }
    </ul>
  )
}
