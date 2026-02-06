

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import { PROJECTS } from '../../constants';

interface ProjectsProps {
  onViewFullArchive?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewFullArchive }) => {

  return (
    <Section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-8 border-b border-white/10 pb-8">
            <div>
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4 block"
                >
                    Selected Work
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl md:text-8xl font-display font-bold text-white tracking-tight"
                >
                    Featured <span className="text-white/40">Cases</span>
                </motion.h2>
            </div>
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:block"
            >
                 <button 
                    onClick={onViewFullArchive}
                    className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-brand-accent transition-colors"
                >
                    View Archive <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </div>

        {/* Simplified Grid (Matching WorkGallery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group cursor-default"
                >
                    {/* Image Frame - Aspect 4:5 */}
                    <div className="w-full aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 mb-6 relative">
                         <motion.img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                    </div>

                    {/* Minimal Meta Data - Simple */}
                     <div className="flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors">
                        <div>
                            <h3 className="text-xl font-display font-bold text-gray-200 group-hover:text-brand-accent transition-colors">
                                {project.title}
                            </h3>
                        </div>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                            {project.category}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="mt-24 md:hidden flex justify-center">
             <button 
                onClick={onViewFullArchive}
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
            >
                View Archive <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;