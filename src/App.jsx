import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Lazy-Loading: jede Seite wird nur geladen, wenn sie tatsächlich aufgerufen wird.
// Das beschleunigt den initialen Seitenaufbau spürbar.
const Impressum     = lazy(() => import('./pages/Impressum.jsx'))
const Datenschutz   = lazy(() => import('./pages/Datenschutz.jsx'))
const BlogIndex     = lazy(() => import('./pages/BlogIndex.jsx'))
const BlogPost      = lazy(() => import('./pages/BlogPost.jsx'))
const LocalLanding  = lazy(() => import('./pages/LocalLanding.jsx'))
const NotFound      = lazy(() => import('./pages/NotFound.jsx'))

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-slate-400 text-sm">Lädt…</div>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/webentwickler-giessen"   element={<LocalLanding city="Gießen" />} />
          <Route path="/webentwickler-marburg"   element={<LocalLanding city="Marburg" />} />
          <Route path="/webentwickler-frankfurt" element={<LocalLanding city="Frankfurt am Main" />} />
          <Route path="/webentwickler-wetzlar"   element={<LocalLanding city="Wetzlar" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
