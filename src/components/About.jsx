const features = [
  {
    title: 'Persönliche Betreuung',
    description: 'Direkter Kontakt, keine Agentur-Hürden – du sprichst immer mit mir.',
  },
  {
    title: 'Faire Preise',
    description: 'Transparente Festpreise statt versteckter Kosten oder überraschender Rechnungen.',
  },
  {
    title: 'Moderne Technologie',
    description: 'Aktuelle Tools wie React, Vite und Tailwind für zukunftssichere Ergebnisse.',
  },
  {
    title: 'Schnelle Umsetzung',
    description: 'Klare Kommunikation, kurze Wege und realistische Zeitpläne.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Bild / Platzhalter */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 via-slate-100 to-slate-200 overflow-hidden">
                <img
                  src="/profil.jpg"
                  alt="Julian Bondarenko – Webentwickler"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-slate-600">Verfügbar</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Bereit für dein Projekt
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Über mich
            </span>
            <h2 className="section-title mt-3">
              Hallo, ich bin Julian.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Als Webentwickler mit Fokus auf React baue ich Websites, die nicht nur gut aussehen,
              sondern auch funktionieren – auf jedem Gerät, in jeder Größe, für jedes Publikum.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Mein Anspruch: ehrliche Beratung, sauberes Handwerk und eine Website,
              auf die du stolz sein kannst.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
