import React from 'react'
import Image from 'next/image'
import analyticsImg1 from '@/public/analytics1.png'
import analyticsImg2 from '@/public/analytics2.png'
import AnalyticsText from './AnalyticsText'
import styles from '@/app/components/analytics section/analytics.module.css'

const AnalyticsSection = () => {
  return (
    <div className={styles.anaContainer}>
        <div className={`${styles.textImgContainer} ${styles.textImgContainer1}`}>
            <div>
              <Image src={analyticsImg1} alt='analytics' className={styles.analyticsImage}/>
            </div>
            <div>
                <AnalyticsText />
            </div>
        </div>
        <div className={`${styles.textImgContainer} ${styles.textImgContainer2}`}>
            <div>
                <AnalyticsText />
            </div>
            <div>
                <Image src={analyticsImg2} alt='analytics' className={styles.analyticsImage}/>    
            </div>
        </div>
    </div>
  )
}

export default AnalyticsSection