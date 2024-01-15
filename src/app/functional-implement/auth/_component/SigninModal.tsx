'use client'

import React, { FormEvent, useState } from 'react'
import styles from './SigninModal.module.scss'
import InputBox from '@/app/_component/InputBox'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

interface UserInfo {
  id: string
  pw: string
}

const SigninModal = () => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    pw: '',
  })

  const router = useRouter()

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { id, pw } = userInfo
    try {
      const response = await signIn('credencials', {
        username: id,
        password: pw,
        redirect: false,
      })
      if (!response?.ok) {
        // setMessage('아이디와 비밀번호가 일치하지 않습니다.');
      } else {
        router.replace('/home')
      }
    } catch (err) {
      console.error(err)
      // setMessage('아이디와 비밀번호가 일치하지 않습니다.');
    }
    //  alert('로그인 성공')
    //  router.replace("/toy-project/sns")
    //  } catch(error){
    //   alert('로그인 실패')
    //     console.error(error);
    //  }
  }

  const close = () => {
    // router.push('/functional-implement/auth') 이건 왜 모달이 남게되늘 걸까
    // back()은 좀 더 팝업창 같은 느낌을 주긴하지만, 경로로 직접 접근했을 때는 사용자 경험이 별로일 것 같음
    router.back()
  }

  return (
    <div className={styles.filter}>
      <form className={styles.modal} onSubmit={login}>
        <h1 className={styles.title}>로그인</h1>
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
        <button /* type="submit" */ className={styles.button}>로그인</button>
        <button
          className={styles.signup}
          type="button"
          onClick={() => router.push('/functional-implement/auth/signup')}
        >
          회원 가입
        </button>
        <div className={styles.find}>
          <button type="button">아이디</button>
          <span> / </span>
          <button type="button">비밀번호</button>
          <span> 찾기</span>
        </div>
      </form>
    </div>
  )
}

export default SigninModal
