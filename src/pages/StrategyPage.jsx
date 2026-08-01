import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import StrategyHero from '../components/strategy/StrategyHero'
import StrategyTypes from '../components/strategy/StrategyTypes'
import StrategyProcess from '../components/strategy/StrategyProcess'
import StrategyIncluded from '../components/strategy/StrategyIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function StrategyPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <StrategyHero />
        <StrategyTypes />
        <StrategyProcess />
        <StrategyIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
