export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<TodoTitle, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
