import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Anker auf der Startseite (führen zu Sektionen)
const sectionItems = [
  { name: 'Leistungen', anchor: 'leistungen' },
  { name: 'FAQ',        anchor: 'faq' },
  { name: 'Über mich',  anchor: 'about' },
  { name: 'Kontakt',    anchor: 'kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  // Auf der Startseite: in-page-Scroll. Auf anderen Seiten: zur Startseite + Anker
  const sectionLinkTarget = (anchor) =>
    isHome ? `#${anchor}` : `/#${anchor}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" onClick={close} className="flex items-center gap-2 text-lg font-bold text-slate-900">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white text-sm">
            JB
          </span>
          <span>Julian Bondarenko</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {sectionItems.map((item) => (
            <li key={item.anchor}>
              {isHome ? (
                <a
                  href={`#${item.anchor}`}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={sectionLinkTarget(item.anchor)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/blog"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              Blog
            </Link>
          </li>
          <li>
            {isHome ? (
              <a href="#kontakt" className="btn-primary !py-2 !px-5">
                Anfrage stellen
              </a>
            ) : (
              <Link to="/#kontakt" className="btn-primary !py-2 !px-5">
                Anfrage stellen
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Menü öffnen"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="container-custom py-4 flex flex-col gap-1">
            {sectionItems.map((item) => (
              <li key={item.anchor}>
                <Link
                  to={sectionLinkTarget(item.anchor)}
                  onClick={close}
                  className="block py-3 px-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                onClick={close}
                className="block py-3 px-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                Blog
              </Link>
            </li>
            <li className="pt-2">
              <Link
                to={isHome ? '#kontakt' : '/#kontakt'}
                onClick={close}
                className="btn-primary w-full"
              >
                Anfrage stellen
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
