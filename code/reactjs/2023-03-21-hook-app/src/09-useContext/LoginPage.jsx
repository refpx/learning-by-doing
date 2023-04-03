import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export function LoginPage () {
  const { setUser, user } = useContext(UserContext)

  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button
        className='btn btn-primary'
        onClick={() => setUser({ id: 1, name: 'Fredy', email: 'mail@mail.com' })}
      >
        Establecer usuario
      </button>
    </>
  )
}
