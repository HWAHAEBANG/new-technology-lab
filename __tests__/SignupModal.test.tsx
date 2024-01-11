import { render, screen } from '@testing-library/react'
import SignupModal from '@/app/functional-implement/auth/_component/SignupModal'
import '@testing-library/jest-dom'
// import { userEvent } from '@testing-library/user-event'

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'))

// 회원가입 헤딩이 있는지 확인.
describe('SigupModal', () => {
  it('renders a heading', () => {
    render(<SignupModal />)
    const heading = screen.getByRole('heading', { name: '회원가입' })
    expect(heading).toBeInTheDocument()
  })

  // it('Submit button is only active When every input value filled.', async ()=>{
  //   render(<SignupModal/>)

  //   const id = screen.getByLabelText('아이디')
  //   const pw = screen.getByLabelText('비밀번호')
  //   const pwCheck = screen.getByLabelText('비밀번호 확인')
  //   const name = screen.getByLabelText('이름')
  //   const mobileCarrier = screen.getByLabelText('통신사')
  //   const phone = screen.getByLabelText('전화번호')
  //   const submitBtn = screen.getByRole('button', { name: '가입 하기'})

  //   await userEvent.type(id, "test")
  //   await userEvent.type(pw, "pw")
  //   await userEvent.type(pwCheck, "pwCheck")
  //   await userEvent.type(name, "name")
  //   await userEvent.type(mobileCarrier, "mobileCarrier")
  //   await userEvent.type(phone, "phone")

  //   expect(submitBtn).toBeEnabled();
  // }
  // )
})

// 모든 값 입력시 활성화 버튼 되도록!
