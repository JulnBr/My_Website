import { lazy, Suspense } from 'react'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'

// Below-the-fold-Komponenten lazy laden für schnelleren Erstaufbau
const FAQ      = lazy(() => import('../components/FAQ.jsx'))
const About    = lazy(() => import('../components/About.jsx'))
const Contact  = lazy(() => import('../components/Contact.jsx'))

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Suspense fallback={<div className="py-20" />}>
        <FAQ />
        <About />
        <Contact />
      </Suspense>
    </>
  )
}
