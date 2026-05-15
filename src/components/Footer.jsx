import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white font-bold">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white text-slate-900 text-sm">
                JB
              </span>
              Julian Bondarenko
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Freelance Webentwicklung mit Fokus auf moderne,
              responsive Websites. Sauberer Code, modernes Design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#leistungen" className="hover:text-white transition">Leistungen</Link></li>
              <li><Link to="/#faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/#about" className="hover:text-white transition">Über mich</Link></li>
              <li><Link to="/#kontakt" className="hover:text-white transition">Kontakt</Link></li>
              <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Standorte */}
          <div>
            <h4 className="text-white font-semibold mb-4">Standorte</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/webentwickler-giessen"   className="hover:text-white transition">Webentwickler Gießen</Link></li>
              <li><Link to="/webentwickler-marburg"   className="hover:text-white transition">Webentwickler Marburg</Link></li>
              <li><Link to="/webentwickler-frankfurt" className="hover:text-white transition">Webentwickler Frankfurt</Link></li>
              <li><Link to="/webentwickler-wetzlar"   className="hover:text-white transition">Webentwickler Wetzlar</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impressum"  className="hover:text-white transition">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {year} Julian Bondarenko. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs">
            Mit ❤ in Gießen entwickelt.
          </p>
        </div>
      </div>
    </footer>
  )
}
