'use client'

import React, { useContext } from 'react'
import styles from './Tab.module.scss'
import { TabContext } from './TabProvider'

const Tap = () => {
  const { tab, setTab } = useContext(TabContext)

  const onClickRec = () => {
    setTab('rec')
  }

  const onClickFol = () => {
    setTab('fol')
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.recommendBtn} onClick={onClickRec}>
        추천
        <div className={styles.tabIndicator} hidden={tab !== 'rec'} />
      </button>
      <button className={styles.followBtn} onClick={onClickFol}>
        팔로우 중
        <div className={styles.tabIndicator} hidden={tab !== 'fol'} />
      </button>
    </div>
  )
}

export default Tap
