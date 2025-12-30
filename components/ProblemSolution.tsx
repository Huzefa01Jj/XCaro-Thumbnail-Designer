import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROBLEM_SOLUTION } from '../constants';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Why Creators Switch to XCaro</h2>
          <p className="text-gray-400">Stop struggling with complex tools. Start creating.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-red-500/5 -z-10" />
            <h3 className="text-xl font-bold text-red-200 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" /> The Old Way
            </h3>
            <ul className="space-y-6">
              {PROBLEM_SOLUTION.problem.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 opacity-70">
                  <div className="mt-1 p-1 bg-red-500/10 rounded">{item.icon}</div>
                  <span className="text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <ArrowRight className="text-white" />
            </div>
          </div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl border-green-500/20 relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-green-500/5 -z-10" />
            <div className="absolute top-0 right-0 p-3">
              <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full border border-green-500/30">
                Recommended
              </span>
            </div>
            <h3 className="text-xl font-bold text-green-200 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" /> The XCaro Way
            </h3>
            <ul className="space-y-6">
              {PROBLEM_SOLUTION.solution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-500/10 rounded">{item.icon}</div>
                  <span className="text-lg font-medium text-white">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;