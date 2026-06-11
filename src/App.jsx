import { MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Audiences from './components/Audiences'
import Capabilities from './components/Capabilities'
import HowWeWork from './components/HowWeWork'
import WhyViavize from './components/WhyViavize'
import EngagementModels from './components/EngagementModels'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Audiences />
        <Capabilities />
        <HowWeWork />
        <WhyViavize />
        <EngagementModels />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
