import React from 'react'
import styles from '@/app/components/testimonials section/testimonials.module.css'
import TestimonialsCard from './testimonials card/TestimonialsCard'

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
        <h4>testimonials</h4>
        <h2>read what others have to say</h2>
        <div className={styles.testimonialsGrid}>
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
        </div>
    </div>
  )
}

export default Testimonials