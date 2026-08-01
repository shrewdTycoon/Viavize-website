import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import AutomationHero from '../components/automation/AutomationHero'
import AutomationTypes from '../components/automation/AutomationTypes'
import AutomationProcess from '../components/automation/AutomationProcess'
import AutomationIncluded from '../components/automation/AutomationIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function AutomationPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <AutomationHero />
        <AutomationTypes />
        <AutomationProcess />
        <AutomationIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
