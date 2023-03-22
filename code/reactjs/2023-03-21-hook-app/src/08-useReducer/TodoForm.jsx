import { useForm } from '../hooks/useForm'

export function TodoForm ({ handleNewTodo }) {
  const { desc, handleInputChange, handleResetForm } = useForm({
    desc: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (desc.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false
    }

    handleNewTodo(newTodo)
    handleResetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Aprender ...'
        className='form-control'
        name='desc'
        value={desc}
        onChange={handleInputChange}
      />
      <button
        type='submit'
        className='btn btn-primary'
      >Add
      </button>
    </form>
  )
}
