import Image from 'next/image'
import React from 'react'
import styles from './Message.module.scss'

const Message = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>쪽지</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={40} height={40} />
          <div className={styles.wrapper}>
            <p>
              <span className={styles.userName}>제로초</span>
              <span className={styles.userId}>@zerohch0 · 18시간</span>
            </p>
            <p className={styles.content}>되는 거 맞나</p>
          </div>
        </li>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={40} height={40} />
          <div className={styles.wrapper}>
            <p>
              <span className={styles.userName}>제로초</span>
              <span className={styles.userId}>@zerohch0 · 18시간</span>
            </p>
            <p className={styles.content}>되는 거 맞나</p>
          </div>
        </li>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={40} height={40} />
          <div className={styles.wrapper}>
            <p>
              <span className={styles.userName}>제로초</span>
              <span className={styles.userId}>@zerohch0 · 18시간</span>
            </p>
            <p className={styles.content}>되는 거 맞나</p>
          </div>
        </li>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={40} height={40} />
          <div className={styles.wrapper}>
            <p>
              <span className={styles.userName}>제로초</span>
              <span className={styles.userId}>@zerohch0 · 18시간</span>
            </p>
            <p className={styles.content}>되는 거 맞나</p>
          </div>
        </li>
      </ul>
    </main>
  )
}

export default Message
