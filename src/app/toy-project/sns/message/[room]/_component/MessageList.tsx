import React from 'react'
import styles from './MessageList.module.scss'

const MessageList = () => {
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: 'zerohch0',
      content: '안녕하세요.',
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: 'hero',
      content: '안녕히가세요.',
      createdAt: new Date(),
    },
    {
      messageId: 3,
      roomId: 123,
      id: 'zerohch0',
      content: '반가워요',
      createdAt: new Date(),
    },
    {
      messageId: 4,
      roomId: 123,
      id: 'hero',
      content: '저도 반가워요',
      createdAt: new Date(),
    },
    {
      messageId: 5,
      roomId: 123,
      id: 'zerohch0',
      content: '사랑해요',
      createdAt: new Date(),
    },
    {
      messageId: 6,
      roomId: 123,
      id: 'hero',
      content: '저도 사랑해요',
      createdAt: new Date(),
    },
  ]

  return (
    <section className={styles.container}>
      {messages.map((item) => {
        if (item.id === 'zerohch0') {
          return (
            <div className={styles.counterpart} key={item.id}>
              <div>{item.content}</div>
              <p>{item.createdAt.toDateString()}</p>
            </div>
          )
        } else {
          return (
            <div className={styles.me} key={item.id}>
              <div>{item.content}</div>
              <p>{item.createdAt.toDateString()}</p>
            </div>
          )
        }
      })}
    </section>
  )
}

export default MessageList
