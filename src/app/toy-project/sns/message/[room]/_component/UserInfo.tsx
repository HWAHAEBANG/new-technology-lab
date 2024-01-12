import Image from 'next/image'
import React from 'react'
import styles from './UserInfo.module.scss'

const UserInfo = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>제로초</h1>
      <Image src="/hhb.png" alt="avatar" width={70} height={70} />
      <p className={styles.userName}>제로초</p>
      <p className={styles.userId}>@zeroch0</p>
    </section>
  )
}

export default UserInfo
