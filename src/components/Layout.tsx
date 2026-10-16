import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout() {
  const { isSignedIn, signOut } = useAuth()

  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Yerbol's Blog</h1>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/posts" className={({ isActive }) => (isActive ? 'active' : '')}>Posts</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          {isSignedIn && (
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
          )}
        </nav>
        {isSignedIn ? (
          <button onClick={signOut} className="btn">Sign Out</button>
        ) : (
          <NavLink to="/signin" className="btn">Sign In</NavLink>
        )}
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Yerbol. Built with React and TypeScript.</p>
      </footer>
    </div>
  )
}