import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import PaidHero from '../components/paid/PaidHero'
import PaidTypes from '../components/paid/PaidTypes'
import PaidProcess from '../components/paid/PaidProcess'
import PaidIncluded from '../components/paid/PaidIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function PaidPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <PaidHero />
        <PaidTypes />
        <PaidProcess />
        <PaidIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
