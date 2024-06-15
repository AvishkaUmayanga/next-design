import React from 'react'
import styles from '@/app/components/get started/start.module.css'
import { fetchGetStartedData } from '@/app/queries/getStartedData'

const GetStarted = async() => {
  const data = await fetchGetStartedData();
  const startedData = data[0];

  return (
    <div className={styles.startContainer}>
        <h4>{startedData.heading}</h4>
        <h2>{startedData.title}</h2>
        <button className={styles.startButton}>{startedData.buttonText}</button>
    </div>
  )
}

export default GetStarted