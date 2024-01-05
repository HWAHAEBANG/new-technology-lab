'use client'

import React, { FormEvent, useState } from 'react'
import styles from './SignupModal.module.scss'
import { useRouter } from 'next/navigation'
import InputBox from '@/app/_component/InputBox'

interface UserInfo {
  id: string
  pw: string
  pwCheck: string
  name: string
  mobileCarrier: string
  phone: string
}

const SignupModal = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    mobileCarrier: '',
    phone: '',
  })

  const router = useRouter()

  const regist = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { id, pw, pwCheck, name, mobileCarrier, phone } = userInfo
    alert(`${id}, ${pw}, ${pwCheck}, ${name}, ${mobileCarrier}, ${phone}`)
  }

  const close = () => {
    // router.push('/functional-implement/auth') 이건 왜 모달이 남게되늘 걸까
    router.back()
  }

  return (
    <div className={styles.filter}>
      <form className={styles.modal} onSubmit={regist}>
        <h1 className={styles.title}>회원가입</h1>
        <button className={styles.closeBtn} type="button" onClick={close}>
          {' '}
          X{' '}
        </button>
        <InputBox<UserInfo>
          name="id"
          label="아이디"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <InputBox<UserInfo>
          name="pw"
          label="비밀번호"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <InputBox<UserInfo>
          name="pw-check"
          label="비밀번호 확인"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <InputBox<UserInfo>
          name="name"
          label="이름"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <InputBox<UserInfo>
          name="mobileCarrier"
          label="통신사"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <InputBox<UserInfo>
          name="phone"
          label="전화번호"
          inputValue={userInfo}
          setInputValue={setUserInfo}
        />
        <button type="submit" className={styles.button}>
          가입 하기
        </button>
        <button
          className={styles.signup}
          onClick={() => router.push('/functional-implement/auth/signin')}
        >
          로그인 하기
        </button>
      </form>
    </div>
  )
}

export default SignupModal
