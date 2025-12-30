import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-indigo-900 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight"
            >
                Stop Guessing. <br />
                Start Getting <span className="text-violet-300">Clicks.</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto"
            >
                Join 10,000+ creators who are growing their channels faster with AI-optimized thumbnails.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)]">
                    Create Your First Thumbnail Free
                </button>
                <p className="mt-4 text-sm text-indigo-300/60">No credit card required • 10 Free generations</p>
            </motion.div>
        </div>
    </section>
  );
};

export default CTA;