import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import { PRICING_CATEGORIES } from '../../constants';

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-brand-black relative py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] opacity-60" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[150px] opacity-40" />
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,92,0,0.1)]"
            >
                <Sparkles size={12} />
                <span>Investment</span>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-display font-bold mb-8 text-white tracking-tight"
            >
                Transparent <br className="hidden md:block" />
                <span className="text-white/40">Pricing Models.</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg font-light leading-relaxed max-w-xl mx-auto"
            >
                Select the package that fits your stage of growth. <br className="hidden md:block" />
                No hidden fees, just clear deliverables.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PRICING_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative flex flex-col h-full"
              >
                 {/* Card styling */}
                 <div className="relative h-full flex flex-col bg-[#0A0A0A] border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-brand-accent/40 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                    
                    {/* Header */}
                    <div className="p-8 pb-6 relative z-10 bg-gradient-to-b from-white/[0.03] to-transparent">
                        <div className="absolute top-4 right-6 opacity-[0.03] text-7xl font-display font-bold group-hover:text-brand-accent group-hover:opacity-[0.06] transition-all duration-500 select-none pointer-events-none">
                            {category.id}
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold text-white mb-3 relative z-10 group-hover:text-brand-accent transition-colors duration-300">
                            {category.title}
                        </h3>
                        <p className="text-sm text-gray-400 font-light leading-relaxed min-h-[40px] relative z-10">
                            {category.purpose}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* Body */}
                    <div className="p-8 pt-6 flex-grow space-y-6">
                        {category.items.map((item, idx) => (
                            <div key={idx} className="group/item">
                                <div className="flex items-end justify-between mb-1.5">
                                    <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">
                                        {item.name}
                                    </span>
                                    {/* Dotted Leader */}
                                    <div className="flex-grow mx-3 border-b-2 border-dotted border-white/10 mb-1.5 opacity-30 group-hover/item:opacity-60 transition-opacity" />
                                    
                                    <div className="text-white font-display font-bold text-lg leading-none whitespace-nowrap">
                                        <span className="text-xs text-gray-500 font-sans font-normal mr-1 align-top">₹</span>
                                        {item.price}
                                    </div>
                                </div>
                                {item.description && (
                                    <p className="text-xs text-gray-600 font-light max-w-[90%] group-hover/item:text-gray-500 transition-colors">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Add-ons Footer */}
                    {category.addons && category.addons.length > 0 && (
                        <div className="p-6 bg-[#080808] border-t border-white/5 relative">
                             {/* Subtle top shadow for depth */}
                             <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                             
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-1 rounded-md bg-white/5 text-brand-accent border border-white/5">
                                    <Plus size={10} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Available Add-ons</span>
                            </div>
                            <ul className="space-y-3">
                                {category.addons.map((addon, i) => (
                                    <li key={i} className="text-xs text-gray-400 pl-2 border-l border-white/10 flex items-start leading-tight hover:text-gray-300 transition-colors hover:border-brand-accent/50">
                                        <span className="pl-3">{addon}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                 </div>
                 
                 {/* Hover Glow Behind */}
                 <div className="absolute -inset-[1px] bg-gradient-to-b from-brand-accent/20 to-transparent rounded-[2rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>

          <div className="mt-28 flex justify-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Custom packages available upon request</span>
                </div>
          </div>
      </div>
    </Section>
  );
};

export default Pricing;