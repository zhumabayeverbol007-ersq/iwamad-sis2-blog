import { Link } from 'react-router-dom'
import type { Post } from '../data/posts'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p className="meta">{post.author} · {post.date}</p>
      <p>{post.content.slice(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="link">Read more →</Link>
    </article>
  )
}