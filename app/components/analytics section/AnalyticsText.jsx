import React from 'react'
import styles from '@/app/components/analytics section/analytics.module.css'
import { fetchAnalyticsData } from '@/app/queries/getAnalyticsData'

const AnalyticsText = async() => {
  const data = await fetchAnalyticsData()
  const analyticsData = data[0]
  return (
    <div className={styles.textContainer}>
        <h4>{analyticsData.heading}</h4>
        <h2>{analyticsData.title}</h2>
        <p>{analyticsData.description}</p>
        <div>
            <button type='button' className={styles.analyticsButton}>{analyticsData.buttonText}</button>
        </div>
    </div>
  )
}

export default AnalyticsText