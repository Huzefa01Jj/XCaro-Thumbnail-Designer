import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Type, Sparkles, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { GenerationConfig } from '../types';

interface GenerateProps {
  onGenerate: (config: GenerationConfig) => void;
}

const STYLES = [
  "Gaming (High Contrast)",
  "Anime (Vibrant Illustration)",
  "Photorealistic (Real Life)",
  "3D Render (Pixar Style)",
  "Vlog (Bright & Clean)",
  "Horror (Dark & Gritty)",
  "Business (Minimal)",
  "Cinematic (Moody)",
  "Reaction (Face Focus)",
  "Tech Review (Clean)"
];

const Generate: React.FC<GenerateProps> = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(STYLES[0]);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!prompt.trim()) {
      setError("Please describe your thumbnail idea first.");
      return;
    }
    setError("");
    onGenerate({ prompt, style, uploadedImage: file });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Create Your <span className="text-violet-500">Viral</span> Thumbnail</h1>
          <p className="text-gray-400">Describe what you want, and our AI will generate optimized variations.</p>
        </motion.div>

        <div className="bg-dark-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] -z-10" />

          {/* Prompt Input */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
              <Type size={16} className="text-violet-400" /> 
              Describe your thumbnail
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A shocked gamer face on the left, bold yellow text saying 'IMPOSSIBLE', neon city background..."
              className="w-full h-32 bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-gray-600 resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Style Selector */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                <Sparkles size={16} className="text-fuchsia-400" />
                Select Style
              </label>
              <div className="relative">
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white appearance-none focus:outline-none focus:border-violet-500 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  {STYLES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                <ImageIcon size={16} className="text-blue-400" />
                Reference Image (Optional)
              </label>
              <div className="relative group">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className={`w-full h-[58px] bg-black/50 border border-dashed rounded-xl flex items-center justify-center gap-3 transition-colors ${file ? 'border-green-500/50 bg-green-500/10' : 'border-white/20 group-hover:border-violet-500 group-hover:bg-white/5'}`}>
                   {file ? (
                     <span className="text-green-400 text-sm truncate px-4">{file.name}</span>
                   ) : (
                     <>
                        <Upload size={18} className="text-gray-400" />
                        <span className="text-sm text-gray-400">Upload JPG/PNG</span>
                     </>
                   )}
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm"
            >
              <AlertCircle size={16} />
              {error}
            </motion.div>
          )}

          {/* Action Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          >
            <Sparkles size={20} className="fill-black" />
            Generate Variations
          </button>

          <p className="text-center text-xs text-gray-600 mt-4">
            Uses 1 credit per generation. Pro tip: Be specific about emotion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Generate;