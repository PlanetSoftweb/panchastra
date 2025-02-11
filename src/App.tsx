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

// Scroll restoration component
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
        
        {/* Add ScrollToTop component */}
        <ScrollToTop />
        
        {/* Only show Navbar if not in admin routes */}
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
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        {/* Only show Footer if not in admin routes */}
        <Routes>
          <Route path="/blog/admin/*" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>

        {/* ChatBot */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;