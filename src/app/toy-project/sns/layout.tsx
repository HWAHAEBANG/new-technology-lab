import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import Nav from './_component/nav'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.leftWrapper}>
        <Nav />
      </section>
      <section className={styles.rightWrapper}>
        <section className={styles.contentArea}>{children}</section>
        <aside className={styles.asideBar}>가</aside>
      </section>
    </main>
  )
}

export default Layout
