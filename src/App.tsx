import React from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { IndustryPage } from './pages/IndustryPage';
import { RfqPage } from './pages/RfqPage';
import { TenderPage } from './pages/TenderPage';
import { QuotationPage } from './pages/QuotationPage';
import { CommercialReportingPage } from './pages/CommercialReportingPage';
import { AutomationPage } from './pages/AutomationPage';
import { TeachingPage } from './pages/TeachingPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { NotesPage } from './pages/NotesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LabPage } from './pages/LabPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { I18nProvider } from './i18n/I18nProvider';

const AppRoutes: React.FC = () => {
  const { path } = useRouter();
  const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');

  let ContentComponent: React.ReactNode;

  if (cleanPath === '/') {
    ContentComponent = <HomePage />;
  } else if (cleanPath === '/industry') {
    ContentComponent = <IndustryPage />;
  } else if (cleanPath === '/industry/rfq-automation') {
    ContentComponent = <RfqPage />;
  } else if (cleanPath === '/industry/tender-monitoring') {
    ContentComponent = <TenderPage />;
  } else if (cleanPath === '/industry/quotation-workflows') {
    ContentComponent = <QuotationPage />;
  } else if (cleanPath === '/industry/commercial-reporting') {
    ContentComponent = <CommercialReportingPage />;
  } else if (cleanPath === '/automation') {
    ContentComponent = <AutomationPage />;
  } else if (cleanPath === '/teaching') {
    ContentComponent = <TeachingPage />;
  } else if (cleanPath === '/work') {
    ContentComponent = <WorkPage />;
  } else if (cleanPath.startsWith('/work/')) {
    const slug = cleanPath.replace('/work/', '');
    ContentComponent = <ProjectDetailPage slug={slug} />;
  } else if (cleanPath === '/about') {
    ContentComponent = <AboutPage />;
  } else if (cleanPath === '/notes') {
    ContentComponent = <NotesPage />;
  } else if (cleanPath.startsWith('/notes/')) {
    const slug = cleanPath.replace('/notes/', '');
    ContentComponent = <ArticleDetailPage slug={slug} />;
  } else if (cleanPath === '/contact') {
    ContentComponent = <ContactPage />;
  } else if (cleanPath === '/lab') {
    ContentComponent = <LabPage />;
  } else {
    ContentComponent = <NotFoundPage />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFBF7] text-[#181816] font-body antialiased selection:bg-[#E6D8AF] selection:text-[#181816]">
      <Navbar />
      <div className="flex-1">
        {ContentComponent}
      </div>
      <Footer />
    </div>
  );
};

export default function App({ initialPath }: { initialPath?: string }) {
  return (
    <I18nProvider>
      <RouterProvider initialPath={initialPath}>
        <AppRoutes />
      </RouterProvider>
    </I18nProvider>
  );
}
