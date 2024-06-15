import styles from '@/app/components/testimonials section/testimonials.module.css'
import TestimonialsCard from './testimonials card/TestimonialsCard'
import { fetchTestimonials } from '@/app/queries/getTestimonialsData';

const Testimonials = async() => {
  const testimonialsData = await fetchTestimonials();

  return (
    <div className={styles.testimonialsContainer}>
        <h4>testimonials</h4>
        <h2>read what others have to say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonialsData && testimonialsData.map((data) => (
            <TestimonialsCard key={data.id} testimonials={data}/>
          ))}
        </div>
    </div>
  )
}

export default Testimonials