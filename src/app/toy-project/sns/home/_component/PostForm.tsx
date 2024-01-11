'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './PostForm.module.scss'

const PostForm = () => {
  const imageRef = useRef<HTMLInputElement>(null)
  const uploadImage = () => {
    imageRef.current?.click()
  }

  return (
    <div className={styles.container}>
      <Image src="/hhb.png" alt="avatar" width={30} height={30} />
      <form className={styles.form}>
        <textarea className={styles.textArea} />
        <div className={styles.btnWrapper}>
          <input type="file" ref={imageRef} hidden />
          <button type="button" className={styles.uploadBtn}>
            <svg onClick={uploadImage} width="24" viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </g>
            </svg>
          </button>
          <button type="submit" className={styles.submitBtn}>
            게시하기
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostForm
