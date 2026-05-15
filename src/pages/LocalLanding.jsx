import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Stadt-spezifische Texte und Anpassungen.
// So muss nicht für jede Stadt eine eigene Komponente angelegt werden.
const cityContent = {
  'Gießen': {
    region: 'Mittelhessen',
    intro:
      'Als Webentwickler mit Standort in Gießen kenne ich die Anforderungen lokaler Unternehmen genau. Für viele meiner Kunden in der Region entwickle ich Websites, die Besucher zu Kunden machen.',
    nearby: 'Wetzlar, Marburg, Pohlheim, Linden, Heuchelheim',
  },
  'Marburg': {
    region: 'Mittelhessen',
    intro:
      'Marburg ist nur 25 Minuten von meinem Standort in Gießen entfernt. Für Selbstständige, Praxen, Anwaltskanzleien und Geschäfte in der Universitätsstadt entwickle ich moderne, responsive Websites.',
    nearby: 'Gießen, Stadtallendorf, Cölbe, Kirchhain',
  },
  'Frankfurt am Main': {
    region: 'Rhein-Main',
    intro:
      'Frankfurt am Main ist die wirtschaftliche Drehscheibe Deutschlands. Hier zählt ein professioneller Online-Auftritt umso mehr. Ich entwickle Websites für Frankfurter Unternehmen – mit dem hanseatischen Anspruch an Qualität, kombiniert mit fairer Preisstruktur.',
    nearby: 'Offenbach, Bad Vilbel, Eschborn, Hanau',
  },
  'Wetzlar': {
    region: 'Mittelhessen',
    intro:
      'Wetzlar liegt direkt neben meinem Standort in Gießen. Für Wetzlarer Handwerker, Dienstleister und Geschäfte realisiere ich Websites, die im lokalen Wettbewerb sichtbar machen.',
    nearby: 'Gießen, Aßlar, Solms, Braunfels',
  },
}

export default function LocalLanding({ city }) {
  const content = cityContent[city] || {
    region: 'Deutschland',
    intro: `Als Freelance Webentwickler entwickle ich für Kunden in ${city} moderne, responsive Websites.`,
    nearby: '',
  }

  useEffect(() => {
    document.title = `Webentwickler ${city} – Responsive Websites mit React | Julian Bondarenko`
    // Lokales LocalBusiness-Schema mit Stadtbezug
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `Webentwickler ${city} – Julian Bondarenko`,
      description: `Freelance Webentwickler für Kunden in ${city} und Umgebung. Moderne, responsive Websites mit React.`,
      areaServed: { '@type': 'City', name: city },
      provider: {
        '@type': 'Person',
        name: 'Julian Bondarenko',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Friedensstr. 24',
          postalCode: '35394',
          addressLocality: 'Gießen',
          addressCountry: 'DE',
        },
      },
    }
    const tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.text = JSON.stringify(schema)
    tag.dataset.dynamicSchema = 'local'
    document.head.appendChild(tag)
    return () => {
      document.head.querySelectorAll('[data-dynamic-schema="local"]').forEach((n) => n.remove())
    }
  }, [city])

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-primary-50 via-white to-slate-50">
        <div className="container-custom max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Standort: {content.region}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Webentwickler in <span className="text-primary-600">{city}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            {content.intro}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/#kontakt" className="btn-primary">
              Unverbindlich anfragen
            </Link>
            <Link to="/#leistungen" className="btn-secondary">
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Lokale Vorteile */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title">Warum ein Webentwickler aus der Region für {city}?</h2>
          <p className="section-subtitle">
            Ich verstehe, was Kunden in {content.region} suchen, kenne die regionale
            Konkurrenz und sorge dafür, dass dein Unternehmen genau dort gefunden wird.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-semibold text-slate-900 mb-2">Schnelle Kommunikation</h3>
              <p className="text-slate-600 leading-relaxed">
                Klare Abstimmung per E-Mail, Telefon und Video-Call – ohne Zeitverlust,
                ohne Agentur-Hürden.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-semibold text-slate-900 mb-2">Local SEO inklusive</h3>
              <p className="text-slate-600 leading-relaxed">
                Damit du bei Google in {city} und Umgebung sichtbar wirst – mit
                LocalBusiness-Schema, sitemap und Google-Business-Anbindung.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-semibold text-slate-900 mb-2">Regionale Erfahrung</h3>
              <p className="text-slate-600 leading-relaxed">
                Ich kenne die Anforderungen lokaler Unternehmen – Praxen, Handwerk,
                Kanzleien, Gastronomie.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="font-semibold text-slate-900 mb-2">Faire Preise</h3>
              <p className="text-slate-600 leading-relaxed">
                Transparente Festpreise – kein Stundenrechnung-Roulette, keine
                versteckten Kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Bereit für deine neue Website in {city}?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Schreib mir kurz – ich melde mich innerhalb von 24 Stunden mit einer
            ehrlichen Einschätzung.
          </p>
          <Link
            to="/#kontakt"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition"
          >
            Jetzt Kontakt aufnehmen
          </Link>
          {content.nearby && (
            <p className="mt-8 text-sm text-slate-400">
              Ich arbeite auch für Kunden in der Umgebung: {content.nearby}
            </p>
          )}
        </div>
      </section>
    </>
  )
}
