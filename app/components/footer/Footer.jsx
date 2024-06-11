import React from 'react'
import styles from '@/app/components/footer/footer.module.css'
import LinksList from './links list/LinksList'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
        <h4>krypto</h4>
        <LinksList heading='krypto' links={['Home', 'About', 'Buy NFTs', 'Sell NFTs']} />
        <LinksList heading='market' links={['Browse NFTs', 'Buy NFTs', 'Sell NFTs']} />
        <LinksList heading='contact' links={['Email', 'LinkedIn', 'Instagram', 'Twitter']} />
        <div className={styles.emailContainer}>
          <h4>join our newsletter</h4>
          <div className={styles.emailAndButton}>
            <input type="email" name="email" id="emailId" placeholder='Email Address'/>
            <button type="submit">submit</button>
          </div>
        </div>
    </footer>
  )
}

export default Footer