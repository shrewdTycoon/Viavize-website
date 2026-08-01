import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import SalesHero from '../components/sales/SalesHero'
import SalesTypes from '../components/sales/SalesTypes'
import SalesProcess from '../components/sales/SalesProcess'
import SalesIncluded from '../components/sales/SalesIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function SalesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <SalesHero />
        <SalesTypes />
        <SalesProcess />
        <SalesIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
