import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import PositioningHero from '../components/positioning/PositioningHero'
import PositioningTypes from '../components/positioning/PositioningTypes'
import PositioningProcess from '../components/positioning/PositioningProcess'
import PositioningIncluded from '../components/positioning/PositioningIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function PositioningPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <PositioningHero />
        <PositioningTypes />
        <PositioningProcess />
        <PositioningIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
