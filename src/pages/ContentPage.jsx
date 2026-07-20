import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import ContentHero from '../components/content/ContentHero'
import ContentTypes from '../components/content/ContentTypes'
import ContentWork from '../components/content/ContentWork'
import HowWeWrite from '../components/content/HowWeWrite'
import ContentIncluded from '../components/content/ContentIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContentPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <ContentHero />
        <ContentTypes />
        <ContentWork />
        <HowWeWrite />
        <ContentIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
