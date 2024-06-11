import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/hero section/hero.module.css'
import heroImg from '@/public/hero.png'

const HeroSection = () => {
  return (
    <div className={styles.heroMain}>
        <div className={styles.heroTextContent}>
            <h1>Discover And Collect Rare NFTs</h1>
            <p>The most secure marketplace for buying and selling unique crypto assets.</p>
            <div className={styles.heroButtonsArea}>
                <button type='button' className={`${styles.heroButtons} ${styles.buyButton}`}>buy nfts</button>
                <button type='button' className={`${styles.heroButtons} ${styles.sellButton}`}>sell nfts</button>
            </div>
        </div>
        <div>
            <Image src={heroImg} alt='hero' className={styles.heroImg}/>
        </div>
    </div>
  )
}

export default HeroSection