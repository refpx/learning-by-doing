export function TodoItem ({ todo, handleDeleteTodo, handleToggleTodo }) {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
        onClick={() => handleToggleTodo(todo.id)}
      >{todo.desc}
      </span>
      <button
        className='btn btn-danger'
        onClick={() => handleDeleteTodo(todo.id)}
      >Delete
      </button>
    </li>
  )
}
