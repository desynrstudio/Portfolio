import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <Section id="services" className="">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
        <div className="max-w-2xl">
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-4 block"
            >
                Our Expertise
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Design Systems <br /> <span className="text-gray-600">for Scale</span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-xl">
                We don't just make things pretty. We build comprehensive visual languages that solve business problems.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`group p-10 rounded-2xl bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-accent/30 transition-all duration-500 relative overflow-hidden ${index === SERVICES.length - 1 ? 'md:col-span-2' : ''}`}
          >
             {/* Hover Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-5xl font-display font-bold text-white/5 group-hover:text-white/10 transition-colors">
                        {service.id}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,92,0,0.3)] transition-all duration-300 ease-out">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform duration-300">
                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
             </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;