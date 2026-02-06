

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';

interface WorkGalleryProps {
  onBack: () => void;
}

const WorkGallery: React.FC<WorkGalleryProps> = ({ onBack }) => {
  const [filter, setFilter] = useState('All');

  // Dynamically extract categories from gallery items
  const categories = useMemo(() => {
    const cats = new Set(GALLERY_ITEMS.map(item => item.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === filter);
  }, [filter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-brand-black text-white z-50 overflow-y-auto custom-scrollbar"
    >
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 right-0 p-6 z-50 bg-brand-black/90 backdrop-blur-xl border-b border-white/5 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group text-gray-400"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Home</span>
        </button>
        <div className="text-lg font-display font-bold tracking-tight">
            Archive <span className="text-brand-accent">.</span>
        </div>
        <div className="w-8 md:w-20" /> {/* Spacer for visual balance */}
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        
        {/* Gallery Title & Filters */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-20 border-b border-white/5 pb-10">
            <div>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-9xl font-display font-bold mb-6 tracking-tighter"
                >
                    Index
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-gray-400 text-lg md:text-xl font-light max-w-lg"
                >
                    A curated collection of visual experiments, brand identities, and digital products.
                </motion.p>
            </div>

            {/* Category Filter Pills */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-3 xl:justify-end max-w-2xl"
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                            filter === cat 
                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                            : 'bg-transparent text-gray-500 border-white/10 hover:border-white/40 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>
        </div>

        {/* Clean Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode='popLayout'>
                {filteredItems.map((item) => (
                    <motion.div
                        layout
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="group cursor-pointer"
                    >
                        {/* Image Frame - Enforced Aspect Ratio for Consistency (4:5) */}
                        <div className="w-full aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 mb-6 relative">
                            <motion.img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                        </div>

                        {/* Card Info */}
                        <div className="flex justify-between items-start border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors">
                            <div>
                                <h3 className="text-xl font-display font-bold text-gray-200 group-hover:text-brand-accent transition-colors">{item.title}</h3>
                            </div>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">{item.category}</span>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
             <div className="py-32 text-center">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
                <button 
                    onClick={() => setFilter('All')} 
                    className="mt-4 text-brand-accent text-sm font-bold uppercase tracking-widest hover:underline"
                >
                    Clear Filter
                </button>
             </div>
         )}
         
         <div className="mt-32 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs uppercase tracking-widest">End of Archive</p>
         </div>
      </div>
    </motion.div>
  );
};

export default WorkGallery;