import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import AnalyticsHero from '../components/analytics/AnalyticsHero'
import AnalyticsTypes from '../components/analytics/AnalyticsTypes'
import AnalyticsProcess from '../components/analytics/AnalyticsProcess'
import AnalyticsIncluded from '../components/analytics/AnalyticsIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function AnalyticsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <AnalyticsHero />
        <AnalyticsTypes />
        <AnalyticsProcess />
        <AnalyticsIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
