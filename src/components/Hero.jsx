export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      {/* Hintergrund Akzente */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Aktuell verfügbar für neue Projekte
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Moderne Websites,{' '}
            <span className="text-primary-600">die wirken</span>.
            {/* SEO-relevant, visuell unsichtbar */}
            <span className="sr-only"> Freelance Webentwickler aus Gießen.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Ich bin Freelance Webentwickler und entwickle responsive, performante
            Websites mit React. Sauberer Code, modernes Design und ein perfekter
            Auftritt auf jedem Gerät.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="btn-primary">
              Projekt anfragen
              <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#leistungen" className="btn-secondary">
              Leistungen ansehen
            </a>
          </div>

          {/* Stats / Trust */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-xl">
            <div>
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="mt-1 text-sm text-slate-600">Responsive Design</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900">&lt; 2s</div>
              <div className="mt-1 text-sm text-slate-600">Ladezeit</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-3xl font-bold text-slate-900">SEO</div>
              <div className="mt-1 text-sm text-slate-600">Optimiert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
