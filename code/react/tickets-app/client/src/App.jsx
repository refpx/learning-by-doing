import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import NewTicket from './pages/NewTicket'
import Queue from './pages/Queue'
import QueuePanel from './pages/QueuePanel'
import Sidebar from './components/Sidebar'
import { Grid } from '@tremor/react'

function App () {
  return (
    <>
      <Sidebar />
      <main className='h-screen ml-60 bg-[#f9fafb]'>
        <Grid numCols={1} className='p-4 gap-2'>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/new-ticket' element={<NewTicket />} />
            <Route path='/queue' element={<Queue />} />

            <Route path='/queue-panel' element={<QueuePanel />} />

            <Route path='*' element={<Navigate to='/login' />} />
          </Routes>
        </Grid>
      </main>
    </>
  )
}
export default App
