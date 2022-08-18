import { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('second')
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
    console.log(data)
    loadUsers()
  }

  const loadUsers = async () => {
    const response = await fetch(import.meta.env.VITE_API + '/users')
    const { data } = await response.json()
    setUsers(data)
  }
  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Set your name'
          onChange={e => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
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
