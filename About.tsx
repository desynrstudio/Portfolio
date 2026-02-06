import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const ValueCard = ({ id, title, desc, delay }: { id: string, title: string, desc: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="p-8 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-sm border border-white/5 hover:border-brand-accent/30 hover:bg-[#111] transition-all duration-300 group h-full flex flex-col justify-between"
    >
        <div>
             <div className="flex items-center justify-between mb-8">
                 <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">{title}</h3>
                 <span className="text-sm font-display font-bold text-white/20 group-hover:text-white/40 transition-colors">0{id}</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400">{desc}</p>
        </div>
    </motion.div>
);

const About: React.FC = () => {
  return (
    <Section id="about" className="relative overflow-hidden bg-black/60 backdrop-blur-lg">
      {/* Intro Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
         <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
         >
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-6 block">Who We Are</span>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 text-white tracking-tighter leading-[0.9]">
                DESIGN <br/> MEETS <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-glow">DIRECTION</span>
            </h2>
         </motion.div>
         
         <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="pt-4 lg:pt-16"
         >
            <div className="mb-12 pl-8 border-l-2 border-brand-accent/50 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-brand-accent" />
                <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                    "Minimal by choice.<br/> Intentional by nature."
                </p>
            </div>
             <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light max-w-lg">
                We’re Desynr. A creative studio built on clarity, design, and intent.
                Every brand we work with starts as a conversation — about what they stand for, how they’re seen, and what they want to become.
            </p>
            
            {/* Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mb-4" />
                    <div className="text-white font-bold text-xl mb-1">Dnyanda</div>
                    <div className="text-[10px] text-brand-accent uppercase tracking-widest mb-3">Visual Lead</div>
                    <p className="text-sm text-gray-500">Identity, Form, Balance</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mb-4" />
                    <div className="text-white font-bold text-xl mb-1">Ayush</div>
                    <div className="text-[10px] text-brand-accent uppercase tracking-widest mb-3">Strategy Lead</div>
                    <p className="text-sm text-gray-500">Flow, Structure, Story</p>
                </div>
            </div>
         </motion.div>
      </div>

      {/* Mission & Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
        <div className="p-10 md:p-14 bg-gradient-to-br from-[#0A0A0A] to-black border border-white/5 rounded-[2rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-brand-accent/10 transition-colors duration-700" />
             <span className="relative z-10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 block">Our Mission</span>
             <h3 className="relative z-10 text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
                Making brands unmistakably clear.
             </h3>
             <p className="relative z-10 text-gray-400 text-lg font-light leading-relaxed">
                We exist to help businesses communicate their identity with intention — turning fragmented visuals into cohesive languages.
             </p>
        </div>
        <div className="p-10 md:p-14 bg-gradient-to-br from-[#0A0A0A] to-black border border-white/5 rounded-[2rem] relative overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-brand-accent/10 transition-colors duration-700" />
             <span className="relative z-10 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 block">Our Philosophy</span>
             <h3 className="relative z-10 text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
                Design must think before it speaks.
             </h3>
             <p className="relative z-10 text-gray-400 text-lg font-light leading-relaxed">
                For us, minimalism isn’t emptiness — it’s precision. Every creative decision is guided by logic, structure, and meaning.
             </p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="mb-32">
        <h3 className="text-3xl font-display font-bold mb-12 text-center text-white">Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 h-auto lg:h-64">
            <ValueCard id="1" delay={0.1} title="Clarity" desc="Remove noise until only the message remains." />
            <ValueCard id="2" delay={0.2} title="Precision" desc="Design is structure. Details guided by accuracy." />
            <ValueCard id="3" delay={0.3} title="Consistency" desc="Systems that stay recognizable everywhere." />
            <ValueCard id="4" delay={0.4} title="Relevance" desc="Adapting to audiences while staying timeless." />
            <ValueCard id="5" delay={0.5} title="Integrity" desc="Honest collaboration and disciplined execution." />
        </div>
      </div>

      {/* Aesthetic Image Grid (Replaces Stats) */}
      <div className="py-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="aspect-square rounded-2xl overflow-hidden border border-white/5 group"
             >
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" alt="Studio Atmosphere" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="aspect-square rounded-2xl overflow-hidden border border-white/5 group"
             >
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract Forms" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="aspect-square rounded-2xl overflow-hidden border border-white/5 group"
             >
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" alt="Digital Texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="aspect-square rounded-2xl overflow-hidden border border-white/5 group"
             >
                <img src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?q=80&w=800&auto=format&fit=crop" alt="Light and Shadow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
             </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;