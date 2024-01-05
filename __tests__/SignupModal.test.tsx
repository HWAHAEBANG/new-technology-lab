import { render, screen } from '@testing-library/react'
import SignupModal from '@/app/functional-implement/auth/_component/SignupModal'

describe('Page', () => {
  it('renders a heading', () => {
    render(<SignupModal />)
    const heading = screen.getByRole('heading', { name: '회원가입' })
    expect(heading).toBeInTheDocument()
  })
})
