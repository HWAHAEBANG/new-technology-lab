import React from 'react'
import styles from './FollowRecommends.module.scss'
import Image from 'next/image'

const FollowRecommends = () => {
  return (
    <section>
      <ul className={styles.ul}>
        <h3>팔로우 추천</h3>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={20} height={20} />
          <p className={styles.userWrapper}>
            <span className={styles.userName}>일론머스크</span>
            <span className={styles.userId}>@elonmusk</span>
          </p>
          <button className={styles.followBtn}>팔로우</button>
        </li>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={20} height={20} />
          <p className={styles.userWrapper}>
            <span className={styles.userName}>일론머스크</span>
            <span className={styles.userId}>@elonmusk</span>
          </p>
          <button className={styles.followBtn}>팔로우</button>
        </li>
        <li className={styles.li}>
          <Image src="/hhb.png" alt="avatar" width={20} height={20} />
          <p className={styles.userWrapper}>
            <span className={styles.userName}>일론머스크</span>
            <span className={styles.userId}>@elonmusk</span>
          </p>
          <button className={styles.followBtn}>팔로우</button>
        </li>
      </ul>
    </section>
  )
}

export default FollowRecommends
