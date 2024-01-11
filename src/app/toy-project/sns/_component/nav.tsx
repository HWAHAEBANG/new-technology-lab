'use client'

import { snsNavList } from '@/constants/SnsNavList'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'
import styles from './Nav.module.scss'

const Nav = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <ul className={styles.wrapper}>
      {snsNavList.map(({ title, path }) => (
        <li key={`/toy-project/sns/${path}`} className={styles.li}>
          <Link href={path} className={path === segment ? styles.active : ''}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav
