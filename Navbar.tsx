import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, 'home')}>
           <span className="text-2xl font-display font-bold text-white tracking-tighter">
            desynr<span className="text-brand-accent">.</span>
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors relative group ${currentView === item.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-accent transition-all duration-300 ${currentView === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ml-4 px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Hire Us <ArrowRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 overflow-hidden h-screen"
          >
            <div className="flex flex-col p-8 gap-6 h-full bg-black">
              {/* Added Home Link */}
              <a 
                href="#"
                className={`text-2xl font-display font-bold hover:pl-4 transition-all ${currentView === 'home' ? 'text-white pl-4 border-l-2 border-brand-accent' : 'text-gray-300'}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>

              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className={`text-2xl font-display font-bold hover:pl-4 transition-all ${currentView === item.href ? 'text-white pl-4 border-l-2 border-brand-accent' : 'text-gray-300'}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="mt-4 flex items-center justify-center w-full py-4 bg-brand-accent text-white font-bold rounded-lg"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;