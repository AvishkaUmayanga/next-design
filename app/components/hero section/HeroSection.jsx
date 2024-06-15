import Image from 'next/image'
import styles from '@/app/components/hero section/hero.module.css'
import heroImg from '@/public/hero.png'
import { fetchHeroData } from '@/app/queries/getHeroSectionData'

const HeroSection = async() => {

  const data = await fetchHeroData();
  const heroData = data[0];

  return (
    <div className={styles.heroMain}>
      <div className={styles.heroTextContent}>
        <h1>{heroData.title}</h1>
        <p>{heroData.description}</p>
        <div className={styles.heroButtonsArea}>
          <button type='button' className={`${styles.heroButtons} ${styles.buyButton}`}>{heroData.buyButton}</button>
          <button type='button' className={`${styles.heroButtons} ${styles.sellButton}`}>{heroData.sellButton}</button>
        </div>
      </div>
      <div>
        <Image src={heroImg} alt='hero' className={styles.heroImage}/>
      </div>
    </div>
  )
}

export default HeroSection