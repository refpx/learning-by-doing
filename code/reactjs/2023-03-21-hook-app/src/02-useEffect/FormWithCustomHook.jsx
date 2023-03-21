import { useForm } from '../hooks/useForm'
import { Message } from './Message'

export default function FormWithCustomHook () {
  const { username, email, password, handleInputChange, handleResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario con custom Hook</h1>
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

      <input
        type='password'
        className='form-control'
        placeholder='********'
        name='password'
        value={password}
        onChange={handleInputChange}
      />

      <button onClick={handleResetForm} className='btn btn-primary'>reset</button>

      {
        (username === 'refpx') && <Message />
      }
    </>
  )
}
