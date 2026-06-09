import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router';
import { initGA, trackPageView } from './lib/analytics';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollNavButton } from './components/ScrollNavButton';
import { HomePage } from './components/HomePage';
import { MaterialsPage } from './components/MaterialsPage';
import { BuyPage } from './components/BuyPage';
import { SellPage } from './components/SellPage';
import { ImportExportPage } from './components/ImportExportPage';
import { IndustriesPage } from './components/IndustriesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfUsePage } from './components/TermsOfUsePage';
import { DisclaimerPage } from './components/DisclaimerPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function PageViewTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

// Initialize GA once at module load
initGA();

function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F7FA' }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Header />
      <main className="flex-1">
        <ScrollToTop />
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/import-export" element={<ImportExportPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollNavButton />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}
