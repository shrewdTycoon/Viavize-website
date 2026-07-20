import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import EmailHero from '../components/email/EmailHero'
import CampaignTypes from '../components/email/CampaignTypes'
// import EmailWork from '../components/email/EmailWork'  // enable once real campaigns are in
import HowWeRun from '../components/email/HowWeRun'
import EmailIncluded from '../components/email/EmailIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function EmailPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <EmailHero />
        <CampaignTypes />
        {/* <EmailWork /> */}
        <HowWeRun />
        <EmailIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
