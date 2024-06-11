import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/featured section/featured.module.css'
import featured1 from '@/public/featured2.png'
import featured2 from '@/public/featured1.png'
import featured3 from '@/public/featured3.png'
import featured4 from '@/public/featured4.png'

const FeaturedSection = () => {
  return (
    <div className={styles.featuredContainer}>
        <h4>Featured on</h4>
        <div className={styles.itemsContainer}>
            <Image src={featured1} alt='TechCrunch'/>
            <Image src={featured2} alt='FastCompany'/>
            <Image src={featured3} alt='MIT'/>
            <Image src={featured4} alt='forbes'/>
        </div>
    </div>
  )
}

export default FeaturedSection