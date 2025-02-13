import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import LaunchApp from './pages/LaunchApp';
import Team from './pages/Team';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAdmin from './pages/BlogAdmin';
import NotFound from './pages/NotFound';
import Preloader from './components/Preloader';
import ChatBot from './components/ChatBot';
import MusicToggle from './components/MusicToggle';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import GDPR from './pages/GDPR';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>
        
        <ScrollToTop />
        
        <Routes>
          <Route path="/blog/admin/*" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/admin/*" element={<BlogAdmin />} />
            <Route path="/launch-app" element={<LaunchApp />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPR />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        <Routes>
          <Route path="/blog/admin/*" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>

        <ChatBot />
        <MusicToggle />
      </div>
    </Router>
  );
}

export default App;