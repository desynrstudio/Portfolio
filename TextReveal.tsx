import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = '', delay = 0, type = 'word' }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === 'char' ? 0.03 : 0.12, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: type === 'char' ? 40 : 20,
      rotateY: type === 'char' ? 90 : 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === 'char') {
    return (
      <motion.div
        style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className={className}
      >
        {children.split('').map((char, index) => (
          <motion.span variants={child} key={index} className="inline-block whitespace-pre">
            {char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Word splitting
  const words = children.split(' ');
  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.25em' }} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};