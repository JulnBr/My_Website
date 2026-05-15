import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Impressum() {
  useEffect(() => {
    document.title = 'Impressum | Julian Bondarenko – Webentwickler'
    return () => { document.title = 'Julian Bondarenko · Freelance Webentwickler aus Gießen | Responsive Websites mit React' }
  }, [])

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white min-h-screen">
      <div className="container-custom max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
          Impressum
        </h1>
        <p className="text-slate-600 mb-12">
          Angaben gemäß § 5 TMG (Telemediengesetz)
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Anbieter</h2>
            <address className="not-italic">
              Julian Bondarenko<br />
              Friedensstr. 24<br />
              35394 Gießen<br />
              Deutschland
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:julianbondarenko@gmail.com"
                className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
              >
                julianbondarenko@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <address className="not-italic">
              Julian Bondarenko<br />
              Friedensstr. 24<br />
              35394 Gießen
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen
              werde ich diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Haftung für Links</h2>
            <p>
              Mein Angebot enthält gegebenenfalls Links zu externen Webseiten Dritter, auf
              deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
              ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="mt-3">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechts­verletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige
              Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Urheberrecht</h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
            <p className="mt-3">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht
              vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechts­verletzung aufmerksam werden, bitte ich um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich
              derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streit­beilegung
              (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline underline-offset-2"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mt-3">
              Ich bin nicht bereit oder verpflichtet, an Streitbeilegungs­verfahren vor einer
              Verbraucher­schlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
