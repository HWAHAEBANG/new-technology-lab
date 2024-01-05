'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import styles from './Main.module.scss'

const Main = () => {
  const router = useRouter()

  return (
    <div className={styles.background}>
      <button
        className={styles.button}
        onClick={() => router.push('/functional-implement/auth/signin')}
      >
        Sign In
      </button>
      <button
        className={styles.button}
        onClick={() => router.push('/functional-implement/auth/signup')}
      >
        Sign Up
      </button>
    </div>
  )
}

export default Main
