import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../ui/Button';
import { TextReveal } from '../ui/TextReveal';

interface HeroProps {
  onViewWork?: () => void;
  onContact?: () => void;
}

const RotatingBadge = () => (
  <motion.div 
    className="absolute bottom-12 right-8 md:right-12 z-20 hidden md:flex items-center justify-center"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
  >
    <div className="relative w-32 h-32 flex items-center justify-center">
      <motion.div 
        className="absolute inset-0 w-full h-full border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      />
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
        <text className="text-[10px] uppercase font-bold tracking-[2px] fill-white">
          <textPath href="#curve">
            Scroll to Explore • Scroll to Explore •
          </textPath>
        </text>
      </motion.svg>
      <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
    </div>
  </motion.div>
);

const GeometricShapes = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Large Circle Outline */}
    <motion.div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, ease: "linear", repeat: Infinity }}
    />
    {/* Dashed Circle */}
    <motion.div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-white/5 rounded-full"
      animate={{ rotate: -360 }}
      transition={{ duration: 50, ease: "linear", repeat: Infinity }}
    />
    
    {/* Floating Star */}
    <motion.div
        className="absolute top-[20%] right-[15%] text-brand-accent/20"
        animate={{ y: [0, -20, 0], rotate: 180 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
        <Star size={64} strokeWidth={1} />
    </motion.div>

     {/* Floating Square */}
    <motion.div
        className="absolute bottom-[20%] left-[10%] w-24 h-24 border border-white/5"
        animate={{ y: [0, 30, 0], rotate: 45 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background & Geometry */}
      <GeometricShapes />
      
      {/* Ghost Typography (Background Layer) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 mix-blend-overlay opacity-20">
         <h1 className="text-[15vw] font-display font-bold text-transparent text-outline leading-none tracking-tighter">
            DESYNR
         </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center h-full pt-20">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:bg-white/10 transition-colors cursor-default group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-brand-cream text-xs font-semibold tracking-widest uppercase group-hover:text-white transition-colors">
                Accepting New Projects
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <div className="relative mb-8 w-full max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter text-white z-10 relative flex flex-col items-center">
            <div className="overflow-hidden">
                <TextReveal delay={1} type="char" className="justify-center">WE CRAFT</TextReveal>
            </div>
            <div className="overflow-hidden mt-2 md:mt-4">
                <TextReveal 
                  delay={6} 
                  type="char" 
                  className="justify-center text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cream to-gray-500 pb-2"
                >
                  LEGACIES
                </TextReveal>
            </div>
            </h1>
            
            {/* Subtle glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/20 blur-[100px] -z-10 rounded-full opacity-0 animate-pulse-slow" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Desynr is a digital studio bridging the gap between <span className="text-white font-medium border-b border-brand-accent/50 pb-0.5">strategic thinking</span> and <span className="text-white font-medium border-b border-brand-accent/50 pb-0.5">artistic expression</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button onClick={onViewWork} className="bg-white text-black hover:bg-gray-200 min-w-[180px] h-14 text-sm uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.2)]">
             View Work
          </Button>
          <Button onClick={onContact} variant="outline" className="min-w-[180px] h-14 text-sm uppercase tracking-widest group border-white/20 hover:border-white">
            Let's Talk <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <RotatingBadge />

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-brand-accent to-transparent" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;