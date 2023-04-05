import { Route, Routes, Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

export function AuthRoutes () {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path='*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
