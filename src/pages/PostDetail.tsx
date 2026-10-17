import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

export default function PostDetail() {
  const { id } = useParams<{ id: string }>()
  const postId = Number(id)
  const post = posts.find((p) => p.id === postId)

  if (!post) {
    return (
      <div className="page">
        <h2>Post not found</h2>
        <p>We could not find a post with id "{id}".</p>
        <Link to="/posts" className="link">← Back to all posts</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <Link to="/posts" className="link">← Back to all posts</Link>
      <h2>{post.title}</h2>
      <p className="meta">{post.author} · {post.date}</p>
      <p>{post.content}</p>
      <LikeButton postId={post.id} />
    </div>
  )
}