import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${noPadding ? '' : 'py-24 md:py-40'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;