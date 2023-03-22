import { TodoItem } from './TodoItem'

export function TodoList ({ todos = [], handleDeleteTodo, handleToggleTodo }) {
  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        ))
      }
    </ul>
  )
}
