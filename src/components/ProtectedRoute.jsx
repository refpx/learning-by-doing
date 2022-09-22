import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ children, user, redirectTo = '/landing' }) => {
  if (!user) {
    return <Navigate to={redirectTo} />
  }

  return children ? children : <Outlet />
}
