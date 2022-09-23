import { useEffect, useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch(import.meta.env.VITE_API + '/users', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    loadUsers()
    console.log(data)
  }

  async function loadUsers() {
    const response = await fetch(import.meta.env.VITE_API + '/users')
    const data = await response.json()
    setUsers(data.users)
    console.log(data)
  }
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Coloca tu nombre'
          onChange={e => setName(e.target.value)}
        />
        <button>Guardar</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
