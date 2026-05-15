# Julian Bondarenko – Freelance Webentwicklung

Marketing-Website für meine Freelance-Webentwicklung mit Sitz in Gießen.
Gebaut mit **React 18**, **Vite 5**, **Tailwind CSS** und **React Router**.
Vollständig responsive, SEO-optimiert und mit Blog-Struktur.

## Features

- Responsive Design (Mobile-First)
- React Router mit echten URLs (`/blog`, `/impressum`, `/datenschutz`, lokale Landingpages)
- Blog mit Markdown-Artikeln (`src/blog/articles/*.md`)
- FAQ-Sektion mit FAQPage Schema.org-Markup
- Lokale Landingpages für Gießen, Marburg, Frankfurt und Wetzlar
- EmailJS-Integration für das Kontaktformular
- Vollständiges SEO-Setup (Meta-Tags, Open Graph, JSON-LD, sitemap.xml, robots.txt)
- Code-Splitting + Lazy-Loading für schnelle Ladezeiten

## Tech-Stack

| Werkzeug          | Zweck                         |
| ----------------- | ----------------------------- |
| React 18          | UI-Bibliothek                 |
| Vite 5            | Build-Tool & Dev-Server       |
| Tailwind CSS      | Styling                       |
| React Router 6    | Client-Side-Routing           |
| EmailJS           | Kontaktformular ohne Backend  |
| marked            | Markdown-Parser für Blog      |

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Dev-Server starten (http://localhost:5173)
npm run dev

# Produktions-Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## Deployment auf Vercel

Diese Website ist für ein Deployment auf [Vercel](https://vercel.com) vorbereitet
(`vercel.json` mit SPA-Rewrites ist enthalten).

1. Repository mit dem Vercel-Account verbinden
2. Framework: **Vite** wird automatisch erkannt
3. Build-Command: `npm run build`
4. Output-Verzeichnis: `dist`
5. Deploy starten – fertig.

Bei [Netlify](https://www.netlify.com/) funktioniert es analog,
`public/_redirects` sorgt dort für korrektes Routing.

## Projektstruktur

```
Meine_Website/
├── index.html                  # Einstiegspunkt mit Meta-Tags + JSON-LD
├── package.json
├── vite.config.js              # Build-Konfiguration mit Vendor-Splitting
├── tailwind.config.js
├── vercel.json                 # SPA-Rewrites für Vercel
├── public/
│   ├── _redirects              # SPA-Rewrites für Netlify
│   ├── profil.jpg              # Profilbild
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx                # Mount-Point mit BrowserRouter
    ├── App.jsx                 # Route-Konfiguration
    ├── index.css               # Tailwind + globale Styles
    ├── components/             # Wiederverwendbare Komponenten
    │   ├── Layout.jsx          # Navbar + Footer + Scroll-Behavior
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Services.jsx
    │   ├── FAQ.jsx
    │   ├── About.jsx
    │   └── Contact.jsx         # EmailJS-Integration
    ├── pages/                  # Route-Komponenten
    │   ├── Home.jsx
    │   ├── Impressum.jsx
    │   ├── Datenschutz.jsx
    │   ├── BlogIndex.jsx
    │   ├── BlogPost.jsx
    │   ├── LocalLanding.jsx    # Generische Local-Landing-Komponente
    │   └── NotFound.jsx
    └── blog/
        ├── posts.js            # Markdown-Loader
        └── articles/           # Blog-Artikel als .md-Dateien
            ├── was-kostet-eine-website.md
            ├── react-vs-wordpress.md
            └── checkliste-website-2026.md
```

## Anpassungen

### Inhalte ändern

- Hero, Services, FAQ, About: jeweilige Datei unter `src/components/`
- Blog-Artikel: `.md`-Datei in `src/blog/articles/` anlegen
- Lokale Landingpages: `cityContent` in `src/pages/LocalLanding.jsx`

### Domain im SEO einsetzen

Vor dem ersten Deployment den Platzhalter `deine-domain.de` durch die echte Domain
ersetzen, in:

- `index.html` (Canonical, Open Graph, JSON-LD)
- `public/sitemap.xml`
- `public/robots.txt`

## EmailJS-Konfiguration

Die Werte für Service-ID, Template-ID und Public Key liegen in
`src/components/Contact.jsx`. Der Public Key ist – wie der Name sagt – für den
Frontend-Einsatz gedacht und kann öffentlich sein. Spam-Schutz aktivierst du im
EmailJS-Dashboard.

## Lizenz

Persönliches Projekt von Julian Bondarenko.
