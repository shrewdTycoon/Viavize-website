import Nav from './components/Nav'
import Hero from './components/Hero'
import ValueProp from './components/ValueProp'
import Model from './components/Model'
import Levers from './components/Levers'
import Practices from './components/Practices'
import Clients from './components/Clients'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProp />
        <Model />
        <Levers />
        <Practices />
        <Clients />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
