import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { PROCESS_STEPS } from '../../constants';

const Process: React.FC = () => {
  return (
    <Section id="process">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            How We Bring <br />
            <span className="text-gradient">Ideas to Life.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Our process is iterative, collaborative, and transparent. We keep you involved 
            at every stage to ensure the final output aligns perfectly with your vision.
          </p>
          <div className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10">
            <h4 className="text-white font-bold mb-2">Ready to start?</h4>
            <p className="text-gray-400 text-sm mb-4">Let's schedule a discovery call.</p>
            <a href="#contact" className="text-brand-accent text-sm font-bold hover:underline">Book a consultation &rarr;</a>
          </div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12 md:space-y-20">
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20%" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { 
                      staggerChildren: 0.2,
                      delayChildren: 0.1
                    }
                  }
                }}
                className="relative pl-8 md:pl-24"
              >
                {/* Number Indicator */}
                <motion.div 
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      } 
                    }
                  }}
                  className="absolute left-[-12px] md:left-4 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-dark border border-brand-accent text-brand-accent flex items-center justify-center text-xs md:text-sm font-bold z-10 shadow-[0_0_15px_rgba(255,92,0,0.5)]"
                >
                  {step.id}
                </motion.div>
                
                {/* Content */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      transition: { 
                        duration: 0.5, 
                        ease: "easeOut" 
                      } 
                    }
                  }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;