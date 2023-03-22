import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { useTodo } from '../hooks/useTodo'

export default function TodoApp () {
  const { todos, todosCount, todosPending, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo()

  return (
    <>
      <h1>TodoApp {todosCount}, <small>pending: {todosPending}</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4 className='mt-0 text-center'>Add TODO</h4>
          <hr />
          <TodoForm handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
