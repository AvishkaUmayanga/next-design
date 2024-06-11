import React from 'react'
import styles from '@/app/components/get started/start.module.css'

const GetStarted = () => {
  return (
    <div className={styles.startContainer}>
        <h4>are you ready?</h4>
        <h2>be a part of the <br/>next big thing</h2>
        <button className={styles.startButton}>get started</button>
    </div>
  )
}

export default GetStarted