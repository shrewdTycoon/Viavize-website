import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import SeoHero from '../components/seo/SeoHero'
import SeoTypes from '../components/seo/SeoTypes'
import SeoProcess from '../components/seo/SeoProcess'
import SeoIncluded from '../components/seo/SeoIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function SeoPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <SeoHero />
        <SeoTypes />
        <SeoProcess />
        <SeoIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
