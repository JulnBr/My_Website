import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { findPost, posts } from '../blog/posts.js'

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Julian Bondarenko`
      // Article-Schema für SEO einfügen
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: { '@type': 'Person', name: 'Julian Bondarenko' },
      }
      const tag = document.createElement('script')
      tag.type = 'application/ld+json'
      tag.text = JSON.stringify(schema)
      tag.dataset.dynamicSchema = 'article'
      document.head.appendChild(tag)
      return () => {
        document.head.querySelectorAll('[data-dynamic-schema="article"]').forEach((n) => n.remove())
      }
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  // Verwandte Artikel (max. 2, ohne aktuellen)
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white">
      <div className="container-custom max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Zurück zum Blog
        </Link>

        <header className="mb-10">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              {post.description}
            </p>
          )}
        </header>

        <div
          className="prose-content text-slate-700 leading-relaxed space-y-5"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">
            Brauchst du Hilfe bei deiner Website?
          </h3>
          <p className="mt-2 text-slate-600">
            Schreib mir gerne – ich melde mich innerhalb von 24 Stunden.
          </p>
          <Link to="/#kontakt" className="btn-primary mt-4">
            Jetzt anfragen
          </Link>
        </div>

        {/* Verwandte Artikel */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Das könnte dich auch interessieren
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/blog/${r.slug}`}
                    className="block p-5 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-xs text-slate-500 mb-1">
                      {r.readingTime} Min. Lesezeit
                    </div>
                    <div className="font-semibold text-slate-900">{r.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}
