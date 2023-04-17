import { Title, TextInput } from '@tremor/react'

function ItemForm () {
  return (
    <>
      <Title>Add new item</Title>

      <form className='mt-2'>
        <TextInput placeholder='Awesome item...' />
      </form>
    </>
  )
}
export default ItemForm
