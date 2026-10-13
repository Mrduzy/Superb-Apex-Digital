/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrandProvider } from './context/BrandContext';
import { ThemeProvider } from './context/ThemeContext';
import { useAppRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { TeamPage } from './pages/TeamPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { SecurityPage } from './pages/SecurityPage';
import { FAQPage } from './pages/FAQPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  const { currentRoute, navigate } = useAppRouter();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'services':
        return <ServicesOverviewPage navigate={navigate} />;
      case 'discord':
        return <ServiceDetailPage serviceSlug="discord" navigate={navigate} />;
      case 'twitch':
        return <ServiceDetailPage serviceSlug="twitch" navigate={navigate} />;
      case 'youtube':
        return <ServiceDetailPage serviceSlug="youtube" navigate={navigate} />;
      case 'social-media':
        return <ServiceDetailPage serviceSlug="social-media" navigate={navigate} />;
      case 'community-management':
        return <ServiceDetailPage serviceSlug="community-management" navigate={navigate} />;
      case 'branding-design':
        return <ServiceDetailPage serviceSlug="creator-branding" navigate={navigate} />;
      case 'team':
        return <TeamPage navigate={navigate} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'process':
        return <ProcessPage navigate={navigate} />;
      case 'case-studies':
        return <CaseStudiesPage navigate={navigate} />;
      case 'pricing':
        return <PricingPage navigate={navigate} />;
      case 'security':
        return <SecurityPage navigate={navigate} />;
      case 'faq':
        return <FAQPage navigate={navigate} />;
      case 'quote':
        return <QuotePage navigate={navigate} />;
      case 'contact':
        return <ContactPage navigate={navigate} />;
      case 'privacy':
        return <LegalPages type="privacy" navigate={navigate} />;
      case 'terms':
        return <LegalPages type="terms" navigate={navigate} />;
      case 'refunds':
        return <LegalPages type="refunds" navigate={navigate} />;
      case '404':
      default:
        return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#080c15] text-slate-900 dark:text-[#e2e8f0] transition-colors">
      <Navbar currentRoute={currentRoute} navigate={navigate} />
      <main className="flex-1 w-full">{renderCurrentPage()}</main>
      <Footer navigate={navigate} />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrandProvider>
        <AppContent />
      </BrandProvider>
    </ThemeProvider>
  );
}
