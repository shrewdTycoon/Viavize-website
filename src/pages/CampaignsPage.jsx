import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import CampaignsHero from '../components/campaigns/CampaignsHero'
import CampaignsTypes from '../components/campaigns/CampaignsTypes'
import CampaignsProcess from '../components/campaigns/CampaignsProcess'
import CampaignsIncluded from '../components/campaigns/CampaignsIncluded'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function CampaignsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <CampaignsHero />
        <CampaignsTypes />
        <CampaignsProcess />
        <CampaignsIncluded />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
