import Image from 'next/image'
import React from 'react'
import styles from './UserInfo.module.scss'

const UserInfo = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>제트닷컴</h1>
      <div className={styles.wrapper}>
        <Image src="/hhb.png" alt="avatar" width={70} height={70} />
        <div className={styles.user}>
          <p className={styles.userName}>제트닷컷</p>
          <p className={styles.userId}>@zeroch1</p>
        </div>
        <button className={styles.messageBtn}>
          <svg
            viewBox="0 0 24 24"
            width="18"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-z80fyv r-19wmn03"
          >
            <g>
              <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
            </g>
          </svg>
        </button>
        <button className={styles.followBtn}>팔로우</button>
      </div>
      <p className={styles.state}>32 팔로워 · 1 팔로우 중</p>
    </section>
  )
}

export default UserInfo
