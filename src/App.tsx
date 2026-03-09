import { Navbar } from './components/landing/Navbar'
import { Hero } from './components/landing/Hero'
import { HowItWorks } from './components/landing/HowItWorks'
import { TwoModes } from './components/landing/TwoModes'
import { Features } from './components/landing/Features'
import { Changelog } from './components/landing/Changelog'
import { Security } from './components/landing/Security'
import { Footer } from './components/landing/Footer'

export default function App() {
  return (
    <div className="noise-overlay min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TwoModes />
      <Features />
      <Changelog />
      <Security />
      <Footer />
    </div>
  )
}
