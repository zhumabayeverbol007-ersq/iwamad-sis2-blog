import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}