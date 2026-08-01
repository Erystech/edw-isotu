import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import { LoadingState } from './components/states';
import './App.css';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Articles = lazy(() => import('./pages/Articles'));
const Speaking = lazy(() => import('./pages/Speaking'));
const Books = lazy(() => import('./pages/Books'));
const Insights = lazy(() => import('./pages/Insights'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ClearliftAfricaMentorship = lazy(() => import('./pages/mentorship/ClearliftAfricaMentorship'));
const ExecutiveMasterclass = lazy(() => import('./pages/mentorship/ExecutiveMasterclass'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));

// Fallback component for loading states
function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <LoadingState />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        {/* RootLayout acts as a parent layout route. 
            React Router will inject the matched child Route into RootLayout's <Outlet /> */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/books" element={<Books />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/mentorship/clearlift-africa" element={<ClearliftAfricaMentorship />} />
          <Route path="/mentorship/executive-masterclass" element={<ExecutiveMasterclass />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}