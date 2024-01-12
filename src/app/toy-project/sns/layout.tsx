import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Nav from './_component/nav'
import Image from 'next/image'
import TrendSearch from './_component/TrendSearch'
import FollowRecommends from './_component/FollowRecommends'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftWrapper}>
        <div className={styles.logoWrapper}>
          <Image src="/hhb.png" alt="logo" width={80} height={80} />
        </div>
        <Nav />
      </section>
      <section className={styles.rightWrapper}>
        <section className={styles.contentArea}>{children}</section>
        <aside className={styles.asideBar}>
          <TrendSearch />
          <FollowRecommends />
        </aside>
      </section>
    </main>
  )
}

export default Layout
