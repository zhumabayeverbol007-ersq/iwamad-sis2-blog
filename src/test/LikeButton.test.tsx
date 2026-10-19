import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from '../components/LikeButton'

describe('LikeButton', () => {
  it('increments likes when clicked', async () => {
    render(<LikeButton postId={1} />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('❤️ 0')
    await userEvent.click(button)
    expect(button).toHaveTextContent('❤️ 1')
  })
})