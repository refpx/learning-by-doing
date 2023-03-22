/* globals localStorage */
import { useReducer, useEffect } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
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
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
