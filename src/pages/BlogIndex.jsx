import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { posts } from '../blog/posts.js'

export default function BlogIndex() {
  useEffect(() => {
    document.title = 'Blog – Webentwicklung & Tipps | Julian Bondarenko'
  }, [])

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white min-h-screen">
      <div className="container-custom max-w-4xl">
        <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
          Blog
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900">
          Wissen rund um moderne Webentwicklung
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Praktische Tipps, ehrliche Vergleiche und Antworten auf die häufigsten Fragen
          zu professionellen Websites für Selbstständige und Unternehmen.
        </p>

        <ul className="mt-16 space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg rounded-2xl p-6 sm:p-8 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('de-DE', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                  )}
                  <span>·</span>
                  <span>{post.readingTime} Min. Lesezeit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  Artikel lesen
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="mt-16 text-slate-500">Noch keine Artikel vorhanden.</p>
        )}
      </div>
    </section>
  )
}
