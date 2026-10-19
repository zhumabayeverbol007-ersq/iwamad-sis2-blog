import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Posts from '../pages/Posts'
import { posts } from '../data/posts'

describe('Posts', () => {
  it('renders one card per post', () => {
    render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    )
    posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    })
  })
})