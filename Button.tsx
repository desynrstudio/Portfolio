import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary: "bg-brand-accent text-white hover:bg-brand-glow hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-transparent",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40",
  };

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a 
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileTap={{ scale: 0.95 }}
        {...(props as any)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;