import React from 'react'
import Tap from './_component/Tab'
import TabProvider from './_component/TabProvider'
import PostForm from './_component/PostForm'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <main className={styles.container}>
      <TabProvider>
        <Tap />
        <PostForm />
      </TabProvider>
    </main>
  )
}

export default Home
