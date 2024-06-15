import Image from 'next/image'
import styles from '@/app/components/testimonials section/testimonials card/card.module.css'

const TestimonialsCard = ({testimonials}) => {
  return (
    <div className={styles.card}>
      <Image 
        src={testimonials.userImage.url} 
        alt='olivia cole' 
        className={styles.cardImg}
        width={500} 
        height={500}
      />
      <div className={styles.cardText}>
        <h4>{testimonials.title}</h4>
        <p>{testimonials.userThoughts}</p>
      </div>
    </div>
  )
}

export default TestimonialsCard