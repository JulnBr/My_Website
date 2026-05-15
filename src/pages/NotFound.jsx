import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 – Seite nicht gefunden | Julian Bondarenko'
  }, [])

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white min-h-screen flex items-center">
      <div className="container-custom max-w-2xl text-center">
        <div className="text-7xl sm:text-9xl font-bold text-primary-100 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Diese Seite gibt es nicht oder sie wurde verschoben. Vielleicht hilft dir
          einer dieser Links weiter:
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Zur Startseite
          </Link>
          <Link to="/blog" className="btn-secondary">
            Zum Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
