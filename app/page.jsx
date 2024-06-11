import styles from '@/app/page.module.css'
import Header from './components/header/Header';
import HeroSection from './components/hero section/HeroSection';
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
    </main>
  );
}