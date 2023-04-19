import { Route, Routes, Navigate } from 'react-router-dom'
import { JournalPage } from '../pages/JournalPage'

export function JournalRoutes () {
  return (
    <Routes>
      <Route path='/' element={<JournalPage />} />

      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
