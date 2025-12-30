import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  BrainCircuit, 
  LayoutTemplate, 
  Image as ImageIcon, 
  ScanEye, 
  Wand2, 
  GalleryHorizontalEnd 
} from 'lucide-react';

const LOGIC_STEPS = [
  {
    title: "User Prompt / Image",
    desc: "Raw input ingestion",
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-gray-500 to-gray-700"
  },
  {
    title: "Prompt Analyzer (NLP)",
    desc: "Extracts subject, emotion & genre context",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Style + Layout Selector",
    desc: "Matches concept to viral composition patterns",
    icon: <LayoutTemplate className="w-6 h-6" />,
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Image Generation Model",
    desc: "High-fidelity diffusion rendering",
    icon: <ImageIcon className="w-6 h-6" />,
    color: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "CTR Optimization Layer",
    desc: "Saliency mapping & focal point verification",
    icon: <ScanEye className="w-6 h-6" />,
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Post-Processing",
    desc: "Smart contrast, color grading & text overlays",
    icon: <Wand2 className="w-6 h-6" />,
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Multiple Thumbnail Outputs",
    desc: "4x variations ready for A/B testing",
    icon: <GalleryHorizontalEnd className="w-6 h-6" />,
    color: "from-white to-gray-300"
  }
];

const AILogic: React.FC = () => {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-fuchsia-900/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-6"
          >
            Under the Hood
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Smart Design Intelligence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            XCaro isn't just a filter. It's a complex pipeline of multiple AI models working in harmony to maximize your Click-Through Rate.
          </p>
        </div>

        <div className="relative">
          {/* Central Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-green-500"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "linear" }}
            />
          </div>

          <div className="space-y-12">
            {LOGIC_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Node Point on Line */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-dark-bg border-2 border-white/20 rounded-full z-10 md:-translate-x-1/2 -translate-x-1/2 box-content">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${step.color} opacity-0 animate-pulse`} style={{ opacity: 1 }} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[42%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors relative overflow-hidden`}>
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Empty spacer for opposite side layout balancing */}
                <div className="hidden md:block md:w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILogic;