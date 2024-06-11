'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/app/components/header/Header.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <p>krypto</p>
      </div>
      <nav className={`${styles.navLinks} ${isOpen ? styles.dropDown : ''}`}>
        <Link href='#'>about</Link>
        <Link href='#'>pricing</Link>
        <Link href='#'>contact</Link>
        <Link href='#'>buy nfts</Link>
      </nav>
      <div className={styles.iconsContainer}>
        {isOpen ? <GrClose onClick={toggleMenu}/> : <GiHamburgerMenu onClick={toggleMenu}/>}
      </div>
    </header>
  )
}

export default Header