import React from 'react'
import UserInfo from './_component/UserInfo'
import MessageList from './_component/MessageList'
import MessageForm from './_component/MessageForm'
import styles from './Room.module.scss'

const Room = () => {
  return (
    <main className={styles.main}>
      <UserInfo /* id={ids[0]} */ />
      <MessageList /* id={ids[0]} */ />
      <MessageForm /* id={ids[0]} */ />
    </main>
  )
}

export default Room
