import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Menu, LayoutGrid, Image, Settings, Download, Edit3 } from 'lucide-react';

const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-bg to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Powerful Control, Simple UI</h2>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden relative"
        >
            {/* Window Controls */}
            <div className="h-12 bg-black/50 border-b border-white/5 flex items-center px-4 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="w-1/3 h-6 bg-white/5 rounded-full" />
                <div className="w-20" /> 
            </div>

            <div className="flex h-[600px]">
                {/* Sidebar */}
                <div className="w-16 md:w-64 border-r border-white/5 bg-black/20 hidden md:flex flex-col p-4 gap-2">
                    <div className="flex items-center gap-2 mb-8 px-2">
                         <div className="w-6 h-6 rounded bg-violet-600" />
                         <span className="font-bold">XCaro</span>
                    </div>
                    {['Projects', 'Templates', 'Brand Kit', 'Inspiration'].map((item, i) => (
                        <div key={item} className={`p-3 rounded-lg flex items-center gap-3 cursor-pointer ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                            <LayoutGrid size={18} />
                            <span>{item}</span>
                        </div>
                    ))}
                    <div className="mt-auto p-4 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 rounded-xl border border-white/10">
                        <p className="text-xs font-bold text-white mb-2">Pro Plan</p>
                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-violet-500" />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2">75/100 Credits used</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="h-16 border-b border-white/5 flex items-center justify-between px-8">
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
                            <span>My Projects</span>
                            <span>/</span>
                            <span className="text-white">New Thumbnail</span>
                        </div>
                        <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                            <Download size={16} /> Export
                        </button>
                    </div>

                    {/* Canvas Area */}
                    <div className="flex-1 p-8 overflow-y-auto">
                        <div className="flex flex-col gap-6">
                            {/* Input Area */}
                            <div className="glass-panel p-6 rounded-xl">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Prompt</label>
                                <div className="flex gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Surprised man holding iPhone 15, neon city background, extreme close up..." 
                                        className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                                    />
                                    <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200">
                                        Generate
                                    </button>
                                </div>
                            </div>

                            {/* Results Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 hover:border-violet-500 transition-all cursor-pointer">
                                        <img src={`https://picsum.photos/seed/${i + 20}/600/340`} className="w-full h-full object-cover" alt="Result" />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                            <button className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                                                <Edit3 size={20} className="text-black" />
                                            </button>
                                            <button className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                                                <Download size={20} className="text-black" />
                                            </button>
                                        </div>
                                        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                                            V{i}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;