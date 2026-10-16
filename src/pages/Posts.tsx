import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

export default function Posts() {
  return (
    <div className="page">
      <h2>All Posts</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}