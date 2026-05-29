import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Method from './components/Method';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (
        <div className="noise">
          <Navbar />
          <main>
            <Hero />
            <Problems />
            <Method />
            <Services />
            <Metrics />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
