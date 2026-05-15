/**
 * Blog-Loader
 *
 * Alle Markdown-Dateien im Ordner `src/blog/articles/` werden hier automatisch
 * eingelesen. Jede Datei beginnt mit einem Frontmatter-Block:
 *
 *   ---
 *   title: Mein Artikel
 *   description: Kurze Zusammenfassung
 *   date: 2026-05-13
 *   slug: mein-artikel
 *   readingTime: 4
 *   ---
 *   # Artikelinhalt
 *
 *   Lorem ipsum…
 *
 * Ein neuer Artikel = einfach eine neue .md-Datei anlegen. Fertig.
 */

import { marked } from 'marked'

// Alle Markdown-Dateien als Rohstring importieren
const rawFiles = import.meta.glob('./articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Einfacher Frontmatter-Parser (kein gray-matter nötig)
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }
  const meta = {}
  match[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim()
    meta[key] = val
  })
  return { meta, content: match[2] }
}

// Konfiguration für marked: leichtere Defaults, line-breaks, etc.
marked.setOptions({ gfm: true, breaks: false })

export const posts = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { meta, content } = parseFrontmatter(raw)
    return {
      slug: meta.slug || path.replace(/^.*\/(.*?)\.md$/, '$1'),
      title: meta.title || 'Ohne Titel',
      description: meta.description || '',
      date: meta.date || '',
      readingTime: parseInt(meta.readingTime, 10) || 4,
      html: marked.parse(content),
      rawContent: content,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function findPost(slug) {
  return posts.find((p) => p.slug === slug)
}
