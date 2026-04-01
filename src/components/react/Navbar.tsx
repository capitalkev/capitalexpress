import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isHome = true }: { isHome?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xl">
              CE
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-brand-secondary">
              capital<span className="text-brand-primary">express</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Contáctanos', 'Productos', 'Nosotros', 'Ventajas', 'Preguntas frecuentes'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-brand-primary hover:opacity-80 transition-colors">
                {item}
              </a>
            ))}
            <a href="/enrolate" className="px-6 py-2 rounded-full border-2 border-brand-primary text-brand-primary font-bold hover:bg-brand-primary hover:text-white transition-all duration-300">
              Enrolate
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-secondary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden"
          >
            {['Contáctanos', 'Productos', 'Nosotros', 'Ventajas', 'Preguntas frecuentes'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-base font-bold text-brand-primary" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="/enrolate" onClick={() => setMobileMenuOpen(false)} className="w-full px-5 py-3 rounded-full bg-brand-primary text-white font-bold mt-2 text-center">
              Enrolate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}