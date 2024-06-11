import Link from 'next/link'
import React from 'react'
import styles from '@/app/components/header/Header.module.css'
const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <p>krypto</p>
      </div>
      <nav className={styles.navLinks}>
        <Link href='#'>about</Link>
        <Link href='#'>pricing</Link>
        <Link href='#'>contact</Link>
        <Link href='#'>buy nfts</Link>
      </nav>
    </header>
  )
}

export default Header