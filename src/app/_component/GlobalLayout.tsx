import React from 'react'
import styles from './GlobalLayout.module.scss'
import SideBar from './SideBar'

interface Props {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <main className={styles.sectionDevider}>
      <section className={styles.sideBarSection}>
        <SideBar />
      </section>
      <section className={styles.mainSection}>{children}</section>
    </main>
  )
}

export default GlobalLayout
