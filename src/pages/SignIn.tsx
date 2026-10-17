import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const [name, setName] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() === '') return
    signIn()
    navigate('/dashboard')
  }

  return (
    <div className="page">
      <h2>Sign In</h2>
      <p>This is a demo — no real authentication.</p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter any name"
        />
        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  )
}