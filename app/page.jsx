import styles from '@/app/page.module.css'
import Header from './components/header/Header';
import HeroSection from './components/hero section/HeroSection';
import FeaturedSection from './components/featured section/FeaturedSection';
import AnalyticsSection from './components/analytics section/AnalyticsSection';
import Testimonials from './components/testimonials section/Testimonials';
import GetStarted from './components/get started/GetStarted';
import Footer from './components/footer/Footer';
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      {/* <HeroSection /> */}
      <FeaturedSection />
      <AnalyticsSection />
      <Testimonials />
      <GetStarted />
      <Footer />
    </main>
  );
}
