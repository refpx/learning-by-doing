import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'

import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className='row pt-4'>
      <div className='col-md-4 offset-md-4'>
        <TaskForm />
        <header className='d-flex justify-content-between my-3'>
          <span className='h5'>
            {showTaskDone ? 'Tasks done' : 'Tasks to do'}
          </span>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setShowTaskDone(!showTaskDone)}>
            {showTaskDone ? 'Hide' : 'Show'} done tasks
          </button>
        </header>
        <TaskList done={showTaskDone} />
      </div>
    </div>
  )
}

export default Home
