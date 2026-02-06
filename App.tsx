import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import CustomCursor from './components/ui/CustomCursor';
import WorkGallery from './components/WorkGallery';
import ContactPage from './components/ContactPage';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      // Small delay before triggering completion to let user see 100%
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-brand-black flex flex-col justify-between p-8 md:p-12 text-brand-cream"
    >
      <div className="flex justify-between items-start">
        <div className="text-sm font-bold uppercase tracking-widest">Desynr Studio</div>
        <div className="text-sm font-bold uppercase tracking-widest text-brand-grey">©2025</div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="text-center"
        >
             <h1 className="text-[12vw] leading-none font-display font-bold tracking-tighter mix-blend-difference text-brand-cream">
                DIGITAL ALCHEMY
             </h1>
        </motion.div>
      </div>

      <div className="flex justify-between items-end border-t border-white/20 pt-4">
        <div className="w-1/3 text-xs text-brand-grey hidden md:block">
          Crafting premium digital experiences <br /> for forward-thinking brands.
        </div>
        <div className="text-8xl md:text-9xl font-display font-bold leading-none tracking-tighter">
          {count}%
        </div>
      </div>
    </motion.div>
  );
};

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  type ViewState = 'home' | 'work' | 'services' | 'pricing' | 'process' | 'about' | 'contact';
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewState);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-cream font-sans relative selection:bg-brand-accent selection:text-white overflow-hidden">
      {/* Global Background Animation */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[100px] animate-blob-slow mix-blend-screen" />
          <div className="absolute top-[40%] right-[-20%] w-[60vw] h-[60vw] bg-brand-accent/5 rounded-full blur-[120px] animate-blob-slow animation-delay-4000 mix-blend-screen" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/5 rounded-full blur-[100px] animate-blob-slow animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="noise-overlay" />
      
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
             {/* Navbar is persistent except for certain full screen modes if needed, currently persistent */}
             {currentView !== 'work' && currentView !== 'contact' && (
                <Navbar currentView={currentView} onNavigate={handleNavigate} />
             )}

             <AnimatePresence mode="wait">
                {currentView === 'home' && (
                    <motion.div key="home" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
                        <Hero onViewWork={() => handleNavigate('work')} onContact={() => handleNavigate('contact')} />
                        <Projects onViewFullArchive={() => handleNavigate('work')} />
                        <Footer />
                    </motion.div>
                )}

                {currentView === 'services' && (
                    <PageWrapper key="services">
                        <Services />
                    </PageWrapper>
                )}

                {currentView === 'pricing' && (
                    <PageWrapper key="pricing">
                        <Pricing />
                    </PageWrapper>
                )}

                {currentView === 'process' && (
                    <PageWrapper key="process">
                        <Process />
                    </PageWrapper>
                )}

                {currentView === 'about' && (
                    <PageWrapper key="about">
                        <About />
                        <Testimonials />
                    </PageWrapper>
                )}

                {currentView === 'work' && (
                    <WorkGallery key="work" onBack={() => setCurrentView('home')} />
                )}

                {currentView === 'contact' && (
                    <ContactPage key="contact" onBack={() => setCurrentView('home')} />
                )}
             </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};