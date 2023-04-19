import { Title, TextInput } from '@tremor/react'
import { useState } from 'react'

function ItemForm ({ onCreateItem }) {
  const [value, setValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    if (value.trim().length > 0) {
      onCreateItem(value)
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
