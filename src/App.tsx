import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '@/components/ModalContext';
import { Loader } from '@/components/Loader';
import { Cursor } from '@/components/Cursor';
import { Layout } from '@/components/Layout';
import { HealthTestModal } from '@/components/HealthTestModal';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { TechniquesPage } from '@/pages/TechniquesPage';
import { PackagesPage } from '@/pages/PackagesPage';
import { StoriesPage } from '@/pages/StoriesPage';
import { TourPage } from '@/pages/TourPage';
import { MethodsPage } from '@/pages/MethodsPage';
import { TeamPage } from '@/pages/TeamPage';
import { BlogPage } from '@/pages/BlogPage';
import { ContactPage } from '@/pages/ContactPage';
import { DownloadsPage } from '@/pages/DownloadsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Loader />
        <Cursor />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/techniques" element={<TechniquesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/methods" element={<MethodsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        <HealthTestModal />
      </ModalProvider>
    </BrowserRouter>
  );
}
