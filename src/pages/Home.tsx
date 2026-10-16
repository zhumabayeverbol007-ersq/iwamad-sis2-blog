import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <h2>Welcome to My Blog</h2>
      <p>This is a small blog built with React, TypeScript and React Router.</p>
      <p>It has five posts, a like button, a custom 404 page, and a protected dashboard.</p>
      <Link to="/posts" className="btn">Read Posts →</Link>
    </div>
  )
}