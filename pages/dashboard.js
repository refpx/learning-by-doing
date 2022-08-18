import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

function Dashboard() {
  const [user, setUser] = useState({
    email: '',
    username: '',
  })

  const router = useRouter()

  const getProfile = async () => {
    const { data } = await axios.get('/api/profile')
    setUser(data)
  }

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout')
      setUser({
        email: '',
        username: '',
      })
    } catch (error) {
      console.log(error)
    }
    router.push('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => getProfile()}>Get profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Dashboard
