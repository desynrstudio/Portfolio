import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="py-8 border-t border-white/10 bg-brand-black text-center relative z-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div className="uppercase tracking-widest text-xs">&copy; 2025 Desynr Studio.</div>
        <div className="flex gap-6">
            <a href="mailto:desynrstudio@gmail.com" className="hover:text-brand-accent transition-colors"><Mail size={16} /></a>
            <a href="https://instagram.com/de_synr" className="hover:text-brand-accent transition-colors"><Instagram size={16} /></a>
        </div>
    </div>
  </footer>
);

export default Footer;