import { useState } from 'react'

interface LikeButtonProps {
  postId: number
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [likes, setLikes] = useState(0)

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="like-btn"
      aria-label={`Like post ${postId}`}
    >
      ❤️ {likes}
    </button>
  )
}