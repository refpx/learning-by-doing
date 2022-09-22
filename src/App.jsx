import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Admin, Analytics, Dashboard, Home, Landing } from './pages'

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    // request done
    setUser({ id: 1, name: 'John Doe', role: 'admin' })
  }

  const logout = () => {
    // request done
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/landing'>Landing</Link>
        </li>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/analytics'>Analytics</Link>
        </li>
        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </nav>
  )
}

export default App
