import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">V2.0 Now Live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Design Thumbnails <br />
            That <span className="gradient-text">Get Clicked</span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            XCaro uses AI to turn your raw ideas into viral-ready thumbnails in seconds. 
            No design skills required. Just high CTR.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Generate Thumbnail <Zap className="w-5 h-5 fill-black" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/5 transition-all flex items-center gap-2 group">
              See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/${i * 45}/50/50`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-dark-bg"
                />
              ))}
            </div>
            <p>Trusted by 10,000+ creators</p>
          </div>
        </motion.div>

        {/* Animated Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative w-full aspect-video rounded-2xl bg-dark-card border border-white/10 shadow-2xl shadow-violet-500/20 overflow-hidden group">
            {/* Mock Interface Overlay */}
            <div className="absolute inset-0 flex flex-col">
              {/* Top Bar */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-black/40 backdrop-blur-md">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 h-6 w-64 bg-white/5 rounded-md flex items-center px-2">
                  <span className="text-[10px] text-gray-500">prompt: shocked reaction, gaming setup, neon lights</span>
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 relative bg-gray-900 overflow-hidden">
                 {/* The "Generated" Image */}
                 <img 
                    src="https://picsum.photos/seed/tech/800/450" 
                    alt="Thumbnail Preview" 
                    className="w-full h-full object-cover opacity-80"
                 />
                 
                 {/* AI Overlay Elements */}
                 <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-violet-500 rounded-lg flex items-center justify-center">
                    <span className="bg-violet-600 text-white text-xs px-2 py-1 rounded absolute -top-3 left-2">Subject Focus</span>
                 </div>
                 
                 <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-white/10 flex items-center gap-3 animate-bounce">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold text-white">CTR Predicted: 14.2%</span>
                 </div>

                 {/* Floating Text Element */}
                 <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-10 right-10"
                 >
                    <h2 className="text-4xl font-black text-white italic drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] stroke-black" style={{WebkitTextStroke: '1px black'}}>
                      IMPOSSIBLE?!
                    </h2>
                 </motion.div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          {/* Floating Feature Cards */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 bg-dark-card border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
               <Zap className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Generation Time</p>
              <p className="text-lg font-bold text-white">1.2s</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;