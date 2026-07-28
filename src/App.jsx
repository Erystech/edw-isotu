import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import { PageErrorBoundary } from './components/states/ErrorState';
import Home from './pages/Home';
import About from './pages/About';
import Speaking from './pages/Speaking';
import Books from './pages/Books';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import { ExecutiveMasterclass, ClearLiftAfricaMentorship } from './pages/mentorship';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import NotFound  from './pages/NotFound';
import ThankYou  from './pages/ThankYou';
import Privacy   from './pages/legal/Privacy';
import Terms     from './pages/legal/Terms';
import ComponentsTest from './pages/test/ComponentTest';

function App() {
  return (
    <PageErrorBoundary>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/books" element={<Books />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test/components" element={<ComponentsTest />} />
          <Route path="/mentorship">
            <Route
              index
              element={<Navigate to="/mentorship/executive-masterclass" replace />}
            />
            <Route
              path="executive-masterclass"
              element={<ExecutiveMasterclass />}
            />
            <Route
              path="clearlift-africa"
              element={<ClearLiftAfricaMentorship />}
            />
          </Route>
        </Route>
        
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy"   element={<Privacy />}  />
        <Route path="/terms"     element={<Terms />}    />

        {/* Catch-all — must be the final route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageErrorBoundary>
  );
}

export default App;