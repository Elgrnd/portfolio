import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Loader from './components/Loader';

function AppContent() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))] flex flex-col transition-colors duration-300">
      <Navbar />
      <motion.div 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/projets" element={<Projects />} />
        </Routes>
      </motion.div>
      <Footer />
      <Analytics />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <AppContent />
        </Router>
      )}
    </>
  );
}

export default App;