import React, { ChangeEvent } from 'react'
import styles from './InputBox.module.scss'

interface Props<T> {
  name: string
  label: string
  inputValue: T
  setInputValue: React.Dispatch<React.SetStateAction<T>>
}

const InputBox = <T,>({ label, name, inputValue, setInputValue }: Props<T>) => {
  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  }

  // TODO : 이거 이유 꼭 문석하기 ===================================
  // console.log(inputValue[name]); 안됨
  // console.log((inputValue as Record<string, string>)[name]); 됨
  // ===============================================================

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={name.includes('pw') ? 'password' : 'text'}
        name={name}
        value={(inputValue as Record<string, string>)[name]}
        onChange={handleInputValue}
        id={name}
      />
    </div>
  )
}

export default InputBox
