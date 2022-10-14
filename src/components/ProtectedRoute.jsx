import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({
  children,
  isAllowed,
  redirectTo = '/landing',
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return children ? children : <Outlet />
}
