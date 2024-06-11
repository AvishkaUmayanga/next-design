import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/testimonials section/testimonials card/card.module.css'
import testimonialImg from '@/public/testimonialImg.png'
const TestimonialsCard = () => {
  return (
    <div className={styles.card}>
        <Image src={testimonialImg} alt='olivia cole' className={styles.cardImg}/>
        <div className={styles.cardText}>
        <h4>olivia cole</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
        </div>
    </div>
  )
}

export default TestimonialsCard