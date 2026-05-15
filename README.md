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


## Deployment auf Vercel

Diese Website ist für ein Deployment auf [Vercel](https://vercel.com) vorbereitet
(`vercel.json` mit SPA-Rewrites ist enthalten).


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
## Lizenz

Persönliches Projekt von Julian Bondarenko.
