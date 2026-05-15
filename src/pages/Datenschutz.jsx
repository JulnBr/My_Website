import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Datenschutz() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | Julian Bondarenko'
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
          Datenschutzerklärung
        </h1>
        <p className="text-slate-600 mb-12">
          Informationen zur Verarbeitung personenbezogener Daten gemäß
          Datenschutz-Grundverordnung (DSGVO).
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <address className="not-italic mt-4">
              Julian Bondarenko<br />
              Friedensstr. 24<br />
              35394 Gießen<br />
              Deutschland<br />
              E-Mail:{' '}
              <a href="mailto:info@bondarenko-webentwicklung.de" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                info@bondarenko-webentwicklung.de
              </a>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Allgemeine Hinweise</h2>
            <p>
              Der Schutz personenbezogener Daten ist mir ein wichtiges Anliegen.
              Personen­bezogene Daten werden auf dieser Website nur im technisch notwendigen
              Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus
              anderen Gründen an Dritte weitergegeben, sofern dies nicht ausdrücklich an
              entsprechender Stelle aufgeführt ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Bereitstellung der Website und Erstellung von Logfiles</h2>
            <p>
              Bei jedem Aufruf dieser Website erfasst mein System bzw. das System des
              Hosting-Providers automatisiert Daten und Informationen vom Computer­system des
              aufrufenden Rechners. Folgende Daten können dabei erhoben werden:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>IP-Adresse des anfragenden Geräts (gekürzt oder anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="mt-3">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Das
              berechtigte Interesse besteht in der technisch fehlerfreien Darstellung und
              der Sicherheit der Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Kontaktaufnahme per Kontaktformular oder E-Mail</h2>
            <p>
              Wenn Sie mir über das Kontaktformular oder per E-Mail eine Anfrage senden,
              werden Ihre Angaben (Name, E-Mail-Adresse, Inhalt der Nachricht) zum Zwecke
              der Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
            </p>
            <p className="mt-3">
              <strong>Versand über EmailJS:</strong> Für den technischen Versand des
              Kontaktformulars nutze ich den Dienst EmailJS (EmailJS, Inc., USA). Die von
              Ihnen eingegebenen Daten werden über die EmailJS-Server an mein Postfach
              weitergeleitet. Weitere Informationen finden Sie unter{' '}
              <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                emailjs.com/legal/privacy-policy
              </a>
              . Die Übertragung an Server in den USA erfolgt auf Grundlage geeigneter
              Garantien gemäß Art. 44 ff. DSGVO.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies und keine Cookies für
              Marketing- oder Analyse­zwecke. Es werden ausschließlich technisch notwendige
              Cookies (sofern überhaupt) eingesetzt. Rechtsgrundlage: § 25 Abs. 2 Nr. 2
              TTDSG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Externe Schriftarten (Google Fonts)</h2>
            <p>
              Diese Website nutzt Web Fonts von Google zur einheitlichen Darstellung von
              Schriftarten. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web
              Fonts. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse
              diese Website aufgerufen wurde. Weitere Informationen:{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                policies.google.com/privacy
              </a>
              . Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
              auf „https://" wechselt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Ihre Rechte als betroffene Person</h2>
            <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung („Recht auf Vergessenwerden", Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              <li>Recht auf Beschwerde bei einer Aufsichts­behörde (Art. 77 DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Zuständige Aufsichtsbehörde</h2>
            <address className="not-italic mt-3">
              Der Hessische Beauftragte für Datenschutz und Informations­freiheit<br />
              Gustav-Stresemann-Ring 1<br />
              65189 Wiesbaden<br />
              Website:{' '}
              <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                datenschutz.hessen.de
              </a>
            </address>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Änderung dieser Datenschutzerklärung</h2>
            <p>
              Ich behalte mir vor, diese Datenschutz­erklärung anzupassen, damit sie stets
              den aktuellen rechtlichen Anforderungen entspricht.
            </p>
            <p className="mt-3 text-sm text-slate-500">Stand: Mai 2026</p>
          </section>

          <section className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600">
              <strong>Hinweis:</strong> Diese Datenschutz­erklärung wurde nach bestem Wissen
              erstellt. Sie ersetzt jedoch keine individuelle Rechtsberatung.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
