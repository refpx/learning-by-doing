import { useEffect, useState } from 'react'
import { Message } from './Message'

export default function SimpleForm () {
  const [formState, setFormState] = useState({
    username: 'refp',
    email: 'refpx@gmail.com'
  })

  const { username, email } = formState

  const handleInputChange = ({ target }) => {
    const { name, value } = target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect called!')
  }, [])

  useEffect(() => {
    // console.log('formState changed!')
  }, [formState])

  useEffect(() => {
    // console.log('email changed!')
  }, [email])

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='refpx...'
        name='username'
        value={username}
        onChange={handleInputChange}
      />

      <input
        type='email'
        className='form-control'
        placeholder='refpx@gmail.com'
        name='email'
        value={email}
        onChange={handleInputChange}
      />

      {
        (username === 'refpx') && <Message />
      }
    </>
  )
}
