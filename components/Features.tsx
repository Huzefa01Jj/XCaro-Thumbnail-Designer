import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark-bg relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Built for <span className="text-violet-400">Viral Growth</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Every feature is designed to stop the scroll and earn the click.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border-transparent hover:border-violet-500/30"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-violet-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;