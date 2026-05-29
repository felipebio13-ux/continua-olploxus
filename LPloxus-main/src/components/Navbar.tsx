import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const links = [
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Solucoes', href: '#solucoes' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <motion.img
              src="https://i.ibb.co/DfqWpvjF/l-xus-logo.png"
              alt="Loxus"
              className="h-9 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute -inset-2 bg-cyan-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative group">
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {l.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-cyan-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contato" className="btn-secondary px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">
            <span>Solicitar Diagnostico</span>
            <ChevronRight size={16} />
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-400 hover:text-white transition-colors p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden navbar-blur border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white py-3.5 text-base font-medium transition-colors border-b border-white/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="btn-primary px-6 py-4 rounded-full text-sm font-bold text-center mt-4"
              >
                Solicitar Diagnostico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
