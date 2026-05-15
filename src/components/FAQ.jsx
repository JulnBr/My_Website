import { useState } from 'react'

// FAQ-Inhalte. Werden gleichzeitig im Schema.org-Markup unten verwendet.
const faqs = [
  {
    question: 'Was kostet eine Website?',
    answer:
      'Der Preis hängt vom Umfang ab. Eine einfache Landingpage startet bei ca. 800 €, eine mehrseitige Unternehmens-Website mit Kontaktformular und SEO-Grundoptimierung liegt in der Regel zwischen 1.500 und 3.500 €. Ich erstelle dir nach einem kostenlosen Erstgespräch ein transparentes Festpreisangebot, damit du keine Überraschungen erlebst.',
  },
  {
    question: 'Wie lange dauert die Entwicklung?',
    answer:
      'Eine Landingpage kann innerhalb von 1–2 Wochen fertig sein. Eine vollständige Unternehmens-Website mit mehreren Sektionen und Inhalten dauert üblicherweise 3–5 Wochen, abhängig davon, wie schnell wir Texte, Bilder und Feedback austauschen.',
  },
  {
    question: 'Welche Technologien verwendest du?',
    answer:
      'Ich entwickle moderne Websites mit React und Vite, gestaltet mit Tailwind CSS. Diese Tools garantieren extrem schnelle Ladezeiten, saubere Architektur und hervorragende Mobilfreundlichkeit. Bei Bedarf binde ich Headless-CMS wie Sanity oder Contentful an.',
  },
  {
    question: 'Ist die Website wirklich auf allen Geräten responsiv?',
    answer:
      'Ja, absolut. Jede Website wird Mobile-First entwickelt und auf Smartphones, Tablets und Desktops in allen gängigen Größen getestet. Responsive Design ist für mich keine Zusatzoption, sondern Standard.',
  },
  {
    question: 'Kümmerst du dich auch um SEO?',
    answer:
      'Ja. Jede Website wird grundlegend für Suchmaschinen optimiert: schnelle Ladezeiten, sauberes HTML, sprechende Meta-Tags, strukturierte Daten (Schema.org) sowie eine sitemap.xml. Für tiefergehende SEO-Strategien (Keyword-Recherche, Backlinks, Content-Strategie) berate ich gerne im Detail.',
  },
  {
    question: 'Was passiert nach dem Launch?',
    answer:
      'Auf Wunsch kümmere ich mich auch um Wartung, kleine Anpassungen und technischen Support. Die Hosting-Auswahl unterstütze ich gerne – meine Empfehlung sind kostengünstige Anbieter wie Netlify oder Vercel, die kostenloses SSL und globales CDN inklusive bieten.',
  },
  {
    question: 'Arbeitest du auch außerhalb von Gießen?',
    answer:
      'Ja, ich arbeite zu 100 % remote und betreue Kunden in ganz Deutschland und im deutschsprachigen Raum. Die gesamte Zusammenarbeit – von der Beratung über Feedback-Schleifen bis zum Launch – läuft bequem per E-Mail, Video-Call und Telefon.',
  },
  {
    question: 'Bekomme ich die Website auch wirklich auf meinen Namen?',
    answer:
      'Selbstverständlich. Du erhältst nach Abschluss des Projekts den vollständigen Quellcode und kannst die Website jederzeit selbst hosten, anpassen oder zu einem anderen Entwickler mitnehmen. Kein Lock-in.',
  },
]

// JSON-LD FAQPage-Schema, das im <head> bzw. inline eingefügt wird
// und Google ermöglicht, einen erweiterten Suchtreffer mit aufklappbaren
// Fragen anzuzeigen.
function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0) // erste Frage standardmäßig offen

  return (
    <section id="faq" className="section-padding bg-white">
      <FAQSchema />
      <div className="container-custom">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Häufige Fragen
          </span>
          <h2 className="section-title mt-3">
            Antworten auf die wichtigsten Fragen
          </h2>
          <p className="section-subtitle">
            Falls deine Frage nicht dabei ist: schreib mir einfach kurz, ich melde mich
            innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="mt-12 max-w-3xl">
          <ul className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = open === idx
              return (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className={`w-full text-left rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? 'bg-slate-50 border-slate-300'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 px-6 py-5">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <svg
                        className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                    {isOpen && (
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
