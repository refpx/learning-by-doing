import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

function Login() {
  const [email, setEmail] = useState('fromeror@yopmail.com')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await supabase.auth.signIn({
        email,
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (supabase.auth.user()) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className='row pt-4'>
      <form onSubmit={handleSubmit} className='card card-body'>
        <input
          type='email'
          name='email'
          placeholder='youremail@site.com'
          onChange={e => setEmail(e.target.value)}
          value={email}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
