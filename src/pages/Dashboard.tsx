import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const { isSignedIn } = useAuth()

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <p>Welcome! You are signed in: {isSignedIn ? 'Yes' : 'No'}</p>
      <p>This page is protected — only signed-in readers can see it.</p>
    </div>
  )
}