/* globals localStorage */
import { useReducer, useEffect } from 'react'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { todoReducer } from './todoReducer'

const initialState = [
  /* {
    id: new Date().getTime(),
    desc: 'Aprender ReactJS',
    done: false
  },
  {
    id: new Date().getTime() + 100,
    desc: 'Aprender MongoDB',
    done: false
  } */
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export default function TodoApp () {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: 'add',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId
    })
  }

  const handleToggleTodo = (todoId) => {
    console.log(todoId)
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  return (
    <>
      <h1>TodoApp 10, <small>pending: 2</small></h1>
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
