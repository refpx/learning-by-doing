import { Title, TextInput } from '@tremor/react'
import { useState } from 'react'
import { useSocket } from '../hooks/useSocket'

function ItemForm () {
  const [value, setValue] = useState('')
  const { socket } = useSocket('http://localhost:8080')

  const onSubmit = (event) => {
    event.preventDefault()
    if (value.trim().length > 0) {
      socket.emit('create-item', { name: value })
      setValue('')
    }
  }

  return (
    <>
      <Title>Add new item</Title>

      <form className='mt-2' onSubmit={onSubmit}>
        <TextInput
          placeholder='Awesome item...'
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </>
  )
}
export default ItemForm
