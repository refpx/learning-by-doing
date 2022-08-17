import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

import { supabase } from './supabase/client'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
