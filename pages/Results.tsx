import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, RefreshCw, ArrowLeft, Star, Share2, Check } from 'lucide-react';
import { ThumbnailData } from '../types';

interface ResultsProps {
  thumbnails: ThumbnailData[];
  onBack: () => void;
  onRegenerate: () => void;
}

const Results: React.FC<ResultsProps> = ({ thumbnails, onBack, onRegenerate }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleDownload = (imageUrl: string, id: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `xcaro-thumbnail-${id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async (thumb: ThumbnailData) => {
    // If Web Share API is available and we can convert base64 to file
    if (navigator.share) {
        try {
            const blob = await (await fetch(thumb.imageUrl)).blob();
            const file = new File([blob], `thumbnail-${thumb.id}.png`, { type: 'image/png' });
            await navigator.share({
                title: 'Check out this AI Thumbnail',
                text: `Generated with XCaro: ${thumb.title}`,
                files: [file]
            });
            return;
        } catch (err) {
            console.log("Share API failed, falling back to clipboard", err);
        }
    }
    
    // Fallback: Copy image URL or Data to clipboard (Simulated success for UI)
    setCopiedId(thumb.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4 self-start">
            <button 
              onClick={onBack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={24} className="text-white" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white">Generation Results</h1>
              <p className="text-gray-400 text-sm">Here are 4 variations optimized for CTR.</p>
            </div>
          </div>

          <button 
            onClick={onRegenerate}
            className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-medium transition-colors"
          >
            <RefreshCw size={18} />
            Regenerate All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {thumbnails.map((thumb, idx) => (
            <motion.div
              key={thumb.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-violet-500 transition-all shadow-lg"
            >
              <img 
                src={thumb.imageUrl} 
                alt={thumb.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Text - Now using the randomized font and extracted title */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4">
                  <h3 
                    className={`text-white uppercase text-3xl leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] ${thumb.font} transform -rotate-2 origin-bottom-left`} 
                    style={{
                        textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                    }}
                  >
                    {thumb.title}
                  </h3>
              </div>

              {/* CTR Badge */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur border border-white/10 px-2 py-1 rounded text-xs font-mono text-green-400 flex items-center gap-1">
                <Star size={10} className="fill-green-400" />
                {(thumb.score * 10).toFixed(1)}% CTR
              </div>

              {/* Actions Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px]">
                <button 
                    onClick={() => handleDownload(thumb.imageUrl, thumb.id)}
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform active:scale-95 group/btn" 
                    title="Download PNG"
                >
                  <Download size={20} className="text-black group-hover/btn:text-violet-700" />
                </button>
                <button 
                    onClick={() => handleShare(thumb)}
                    className="p-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors" 
                    title="Share"
                >
                  {copiedId === thumb.id ? <Check size={20} className="text-green-400" /> : <Share2 size={20} className="text-white" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">Pro Tip: Include text in "quotes" in your prompt to embed specific names.</p>
        </div>
      </div>
    </div>
  );
};

export default Results;