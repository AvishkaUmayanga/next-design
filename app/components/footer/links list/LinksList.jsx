import React from 'react'
import styles from '@/app/components/footer/links list/links.module.css'
import Link from 'next/link'

const LinksList = ({heading, links}) => {
  return (
    <div className={styles.listContainer}>
      <h5>{heading}</h5>
      <ul>
        {links?.map((link, index) => (
            <li key={index}><Link href='#'>{link}</Link></li>
        ))}      
      </ul>
    </div>
  )
}

export default LinksList