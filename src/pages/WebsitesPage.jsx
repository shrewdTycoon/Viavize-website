import { MotionConfig } from 'framer-motion'
import Nav from '../components/Nav'
import WebsitesHero from '../components/websites/WebsitesHero'
import WhatWeBuild from '../components/websites/WhatWeBuild'
import FeaturedWork from '../components/websites/FeaturedWork'
import HowWeBuild from '../components/websites/HowWeBuild'
import Included from '../components/websites/Included'
// import Testimonials from '../components/websites/Testimonials'  // enable once real quotes are in
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function WebsitesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <WebsitesHero />
        <WhatWeBuild />
        <FeaturedWork />
        <HowWeBuild />
        <Included />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
