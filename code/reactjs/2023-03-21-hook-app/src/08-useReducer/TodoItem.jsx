export function TodoItem ({ todo, handleDeleteTodo }) {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span className='align-self-center'>{todo.desc}</span>
      <button
        className='btn btn-danger'
        onClick={() => handleDeleteTodo(todo.id)}
      >Delete
      </button>
    </li>
  )
}
