import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

/**
 * Gemeinsames Layout für alle Seiten.
 * Sorgt außerdem dafür, dass beim Wechsel der Route an den Seitenanfang
 * gescrollt wird (außer wenn ein #anchor in der URL steht).
 */
export default function Layout({ children }) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Lass den Browser zum Anker scrollen
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
