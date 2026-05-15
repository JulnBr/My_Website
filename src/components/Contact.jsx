import { useState } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS Konfiguration
// Diese Werte sind Public-Keys und dürfen im Frontend stehen.
// Spam-Schutz aktivierst du im EmailJS-Dashboard (rate limiting + reCAPTCHA optional).
const EMAILJS_SERVICE_ID  = 'service_5f4i0hl'
const EMAILJS_TEMPLATE_ID = 'template_58fmdtm'
const EMAILJS_PUBLIC_KEY  = 'FtRbGr062mv6Ncg9g'

const RECIPIENT_EMAIL = 'info@bondarenko-webentwicklung.de'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      // Diese Felder werden 1:1 an dein EmailJS-Template übergeben.
      // Beide Namens-Varianten ({{name}} und {{from_name}}) sind enthalten,
      // damit sowohl das Auto-Reply-Template als auch das Haupt-Template
      // ohne Anpassung funktionieren.
      const templateParams = {
        name:       form.name,
        email:      form.email,
        from_name:  form.name,
        from_email: form.email,
        message:    form.message,
        reply_to:   form.email,
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS Fehler:', err)
      setStatus('error')
      setErrorMsg(
        err?.text ||
        'Beim Versenden ist etwas schiefgelaufen. Bitte versuche es erneut oder schreib direkt eine E-Mail.'
      )
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setErrorMsg('')
  }

  return (
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Linke Seite: Info */}
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="section-title mt-3">
              Lass uns dein Projekt starten.
            </h2>
            <p className="section-subtitle">
              Egal ob du nur eine Frage hast oder bereits ein konkretes Projekt im Kopf –
              ich freue mich auf deine Nachricht.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">E-Mail</div>
                  <a
                    href={`mailto:${RECIPIENT_EMAIL}`}
                    className="text-base font-medium text-slate-900 hover:text-primary-600 transition"
                  >
                    {RECIPIENT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Antwortzeit</div>
                  <div className="text-base font-medium text-slate-900">
                    Innerhalb von 24 Stunden
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Standort</div>
                  <div className="text-base font-medium text-slate-900">
                    Gießen · Deutschland
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Formular */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Nachricht gesendet!</h3>
                <p className="mt-2 text-slate-600">
                  Vielen Dank für deine Anfrage. Ich melde mich innerhalb der nächsten
                  24 Stunden bei dir.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition disabled:opacity-60"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition disabled:opacity-60"
                    placeholder="deine@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition resize-none disabled:opacity-60"
                    placeholder="Erzähl mir kurz von deinem Projekt..."
                  />
                </div>

                {status === 'error' && (
                  <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                    <div className="font-medium mb-1">Senden fehlgeschlagen</div>
                    <div>{errorMsg}</div>
                    <a
                      href={`mailto:${RECIPIENT_EMAIL}`}
                      className="mt-2 inline-block font-medium text-red-700 underline underline-offset-2 hover:text-red-900"
                    >
                      Stattdessen direkt schreiben →
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Wird gesendet...
                    </span>
                  ) : (
                    'Nachricht senden'
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß
                  Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
