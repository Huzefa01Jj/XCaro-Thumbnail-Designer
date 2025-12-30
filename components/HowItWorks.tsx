import React from 'react';
import { motion } from 'framer-motion';
import { Type, Palette, Upload } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Prompt or Upload",
    desc: "Enter a topic (e.g., 'Minecraft Survival Ep 1') or upload your raw reaction shot.",
    icon: Type
  },
  {
    id: 2,
    title: "AI Generation",
    desc: "XCaro analyzes composition and generates 4 high-contrast variations instantly.",
    icon: Palette
  },
  {
    id: 3,
    title: "Export & Publish",
    desc: "Pick your favorite. We export perfectly for YouTube, TikTok, or Instagram.",
    icon: Upload
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
          From Idea to <span className="text-fuchsia-500">Uploaded</span> in 3 Steps
        </h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-dark-card border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] relative group">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm border-2 border-black">
                    {step.id}
                  </div>
                  <div className="text-violet-300 group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={32} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm max-w-xs">{step.desc}</p>

                {/* Live Preview Mock for each step */}
                <div className="mt-8 w-full aspect-video rounded-lg bg-white/5 border border-white/10 overflow-hidden relative">
                    {idx === 0 && (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-xs">
                           <span className="animate-pulse">Waiting for input...</span>
                        </div>
                    )}
                    {idx === 1 && (
                        <div className="grid grid-cols-2 h-full">
                           <div className="bg-gray-800 animate-pulse delay-75"></div>
                           <div className="bg-gray-700 animate-pulse delay-100"></div>
                           <div className="bg-gray-700 animate-pulse delay-150"></div>
                           <div className="bg-gray-800 animate-pulse delay-200"></div>
                        </div>
                    )}
                    {idx === 2 && (
                         <img src="https://picsum.photos/seed/gaming/400/225" className="w-full h-full object-cover" alt="Final" />
                    )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;