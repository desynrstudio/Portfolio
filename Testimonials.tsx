import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '../ui/Section';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-[#080808]/70 backdrop-blur-lg">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-display font-bold text-center mb-4">Client Stories</h2>
        <div className="w-20 h-1 bg-brand-accent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-8 rounded-3xl bg-[#0f0f0f]/80 backdrop-blur-sm border border-white/5 relative"
          >
            <div className="absolute top-8 right-8 text-white/10">
              <Quote size={40} />
            </div>
            
            <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
              <div>
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-brand-accent text-sm">{t.role}, {t.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Logos Strip */}
      <div className="mt-20 pt-10 border-t border-white/5 opacity-50 flex flex-wrap justify-center gap-8 md:gap-16 grayscale">
         {['Adobe', 'Figma', 'Shopify', 'Webflow', 'Vercel'].map(brand => (
             <span key={brand} className="text-xl md:text-2xl font-display font-bold text-gray-500">{brand}</span>
         ))}
      </div>
    </Section>
  );
};

export default Testimonials;