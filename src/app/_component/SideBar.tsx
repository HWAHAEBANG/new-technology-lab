'use client'

import { SIDE_BAR_LIST } from '@/constants/sideBarList'
import React from 'react'
import styles from './SideBar.module.scss'
import { useRouter } from 'next/navigation'

const SideBar = () => {
  const router = useRouter()

  const moveToPage = (code: string, path: string) => {
    router.push(`/${code}/${path}`)
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.categoryWrapper}>
        {SIDE_BAR_LIST.map(({ id, category, code, children }) => {
          return (
            <li key={id}>
              <p className={styles.category}>{category}</p>
              <ul className={styles.projectWrapper}>
                {children.map(({ id, title, path /* , feat */ }) => (
                  <li key={id} className={styles.project}>
                    <button onClick={() => moveToPage(code, path)}>{title}</button>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideBar
