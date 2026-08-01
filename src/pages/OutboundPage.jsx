import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import OutboundHero from '../components/outbound/OutboundHero'
import OutboundTypes from '../components/outbound/OutboundTypes'
import OutboundProcess from '../components/outbound/OutboundProcess'
import OutboundIncluded from '../components/outbound/OutboundIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function OutboundPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <OutboundHero />
        <OutboundTypes />
        <OutboundProcess />
        <OutboundIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
