import React from 'react'
import styles from '@/app/components/analytics section/analytics.module.css'

const AnalyticsText = () => {
  return (
    <div className={styles.textContainer}>
        <h4>Analytics</h4>
        <h2>built-in analytics to track your nfts</h2>
        <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
        <div>
            <button type='button' className={styles.analyticsButton}>view our pricing</button>
        </div>
    </div>
  )
}

export default AnalyticsText