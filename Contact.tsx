import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, X } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { TERMS_AND_CONDITIONS } from '../../constants';

const Contact: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Branding & Identity',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `Project Inquiry: ${formData.service} from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service}

Message:
${formData.message}`;

    // Create mailto link
    const mailtoLink = `mailto:desynrstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-black pt-20 border-t border-white/10 relative overflow-hidden" id="contact">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-accent/10 blur-[120px] rounded-full animate-blob-slow" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-surfaceHighlight/50 blur-[100px] rounded-full animate-blob-slow animation-delay-2000" />
             {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        </div>

        <Section noPadding>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20 relative z-10">
                <div>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                        Let's build <br />
                        <span className="text-white/40">the future.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Have a project in mind? We are currently accepting new clients. 
                        Tell us about your goals, and we'll show you how we can help.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:desynrstudio@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-brand-accent transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                                <Mail size={18} />
                            </div>
                            <span className="text-lg">desynrstudio@gmail.com</span>
                        </a>
                        <a href="https://instagram.com/de_synr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-brand-accent transition-colors">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent">
                                <Instagram size={18} />
                            </div>
                            <span className="text-lg">@de_synr</span>
                        </a>
                        <p className="text-gray-500 text-sm mt-4">
                            Phone: Please request via Email or DM
                        </p>
                    </div>
                </div>

                <div className="bg-[#0a0a0a]/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe" 
                                    className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com" 
                                    className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Phone <span className="text-gray-600 text-xs font-normal ml-1">(Optional)</span></label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 000-0000" 
                                    className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400 ml-1">Service</label>
                                <select 
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                                >
                                    <option>Branding & Identity</option>
                                    <option>Social Media</option>
                                    <option>Motion & Video</option>
                                    <option>Packaging</option>
                                    <option>Marketing Assets</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4} 
                                placeholder="Tell us about your project..." 
                                className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all" 
                            />
                        </div>
                        <Button type="submit" className="w-full py-4 text-base">Send Inquiry</Button>
                    </form>
                </div>
            </div>

            <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div className="text-gray-500 text-sm">
                    &copy; 2025 Desynr Agency. All rights reserved.
                </div>
                <button 
                    onClick={() => setShowTerms(true)}
                    className="text-gray-500 hover:text-white text-sm underline underline-offset-4 transition-colors"
                >
                    Terms & Conditions
                </button>
            </div>
        </Section>

        {/* Terms Modal */}
        <AnimatePresence>
            {showTerms && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setShowTerms(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#111] w-full max-w-4xl max-h-[85vh] rounded-2xl border border-white/10 flex flex-col"
                    >
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-2xl font-display font-bold text-white">Terms & Conditions</h2>
                            <button onClick={() => setShowTerms(false)} className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-6 overflow-y-auto space-y-8 text-gray-300 leading-relaxed">
                            {TERMS_AND_CONDITIONS.map((term, i) => (
                                <div key={i}>
                                    <h3 className="text-white font-bold text-lg mb-2">{term.title}</h3>
                                    <p className="whitespace-pre-line text-sm md:text-base">{term.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </footer>
  );
};

export default Contact;