const services = [
  {
    title: 'Responsive Webentwicklung',
    description: 'Maßgeschneiderte Websites mit React, die auf Smartphones, Tablets und Desktops gleichermaßen perfekt aussehen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Modernes UI/UX Design',
    description: 'Klares, minimalistisches Design, das Vertrauen schafft und deine Besucher zu Kunden macht.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" y1="8" x2="12" y2="8" />
        <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
        <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Performance & SEO',
    description: 'Schnelle Ladezeiten und sauberer Code für bessere Sichtbarkeit bei Google und glückliche Besucher.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Wartung & Support',
    description: 'Auch nach dem Launch bin ich für dich da: Updates, Anpassungen und technische Unterstützung.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'Conversion-optimierte Landingpages für Kampagnen, Produktstarts oder neue Dienstleistungen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Beratung & Konzept',
    description: 'Du weißt noch nicht genau was du brauchst? Ich helfe bei Konzept, Struktur und technischer Strategie.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="leistungen" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Leistungen
          </span>
          <h2 className="section-title mt-3">
            Was ich für dich tun kann
          </h2>
          <p className="section-subtitle">
            Vom ersten Konzept bis zur fertigen Website – ich begleite dich durch jeden Schritt
            der Webentwicklung.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 text-white group-hover:bg-primary-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
