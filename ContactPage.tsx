import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Instagram } from 'lucide-react';
import Button from './ui/Button';
import Accordion from './ui/Accordion';
import { FAQS } from '../constants';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
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
    const subject = `Project Inquiry: ${formData.service} from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:desynrstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-black text-white relative z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 p-6 md:p-8 z-50 bg-brand-black/90 backdrop-blur-md flex justify-between items-center border-b border-white/5">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <div className="text-xl font-display font-bold">
            desynr<span className="text-brand-accent">.</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Intro & FAQs */}
            <div>
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                 >
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
                        Let's Talk <br /> <span className="text-gray-600">Business.</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Have questions before we start? Here are some common things clients ask us.
                        For everything else, just drop a message.
                    </p>
                 </motion.div>

                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                 >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-6">Frequently Asked Questions</h3>
                    <Accordion items={FAQS} />
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8"
                 >
                     <div>
                        <div className="text-sm text-gray-500 mb-2">Direct Contact</div>
                        <a href="mailto:desynrstudio@gmail.com" className="text-xl font-bold hover:text-brand-accent transition-colors">desynrstudio@gmail.com</a>
                     </div>
                     <div>
                        <div className="text-sm text-gray-500 mb-2">Follow Us</div>
                        <a href="https://instagram.com/de_synr" className="text-xl font-bold hover:text-brand-accent transition-colors flex items-center gap-2">
                             @de_synr <Instagram size={18} />
                        </a>
                     </div>
                 </motion.div>
            </div>

            {/* Right Column: Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-[40px]" />
                <h3 className="text-2xl font-bold mb-8 relative z-10">Start a Project</h3>
                
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe" 
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600" 
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
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Phone <span className="text-gray-600 text-xs font-normal ml-1">(Optional)</span></label>
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000" 
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600" 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Service</label>
                        <div className="relative">
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all appearance-none cursor-pointer"
                            >
                                <option>Branding & Identity</option>
                                <option>Social Media</option>
                                <option>Motion & Video</option>
                                <option>Packaging</option>
                                <option>Marketing Assets</option>
                                <option>Web Design & Development</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
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
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600 resize-none" 
                        />
                    </div>
                    <Button type="submit" className="w-full py-4 text-base font-bold bg-white text-black hover:bg-brand-accent hover:text-white border-0">
                        Send Inquiry
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;