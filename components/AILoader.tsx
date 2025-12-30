import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ScanEye, LayoutTemplate, Image as ImageIcon, Wand2, CheckCircle2, Globe, ShieldCheck, Cpu, Database } from 'lucide-react';

interface AILoaderProps {
  onAnimationComplete: () => void;
  isDataReady: boolean;
}

const STEPS = [
  { id: 1, text: "Authenticating Massive AI Agent credentials...", icon: ShieldCheck, duration: 3000 },
  { id: 2, text: "Synchronizing hardware specs & product geometry...", icon: Database, duration: 4000 },
  { id: 3, text: "Analyzing subject anatomy & lighting physics...", icon: BrainCircuit, duration: 4000 },
  { id: 4, text: "Rendering 4x high-fidelity neural layers...", icon: Cpu, duration: 5000 },
  { id: 5, text: "Running CTR heat-map & saliency simulations...", icon: ScanEye, duration: 3000 },
  { id: 6, text: "Calibrating 12-bit color depth & HDR...", icon: Wand2, duration: 3000 },
  { id: 7, text: "Synthesizing final high-impact thumbnails...", icon: CheckCircle2, duration: 3000 },
];

const AILoader: React.FC<AILoaderProps> = ({ onAnimationComplete, isDataReady }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // If we have completed all steps in the list
    if (currentStepIndex >= STEPS.length) {
      // We only exit if the actual API data has also arrived
      if (isDataReady) {
        const timeout = setTimeout(onAnimationComplete, 800);
        return () => clearTimeout(timeout);
      }
      return; // Keep waiting at the last step if data is slow
    }

    // Fixed duration per step to ensure the 25-second experience
    const stepDuration = STEPS[currentStepIndex].duration;

    const timer = setTimeout(() => {
      setCurrentStepIndex(prev => prev + 1);
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [currentStepIndex, isDataReady, onAnimationComplete]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="mb-16 text-center">
            <motion.div 
                animate={{ 
                  rotate: 360,
                  boxShadow: ["0 0 20px rgba(139,92,246,0.3)", "0 0 60px rgba(139,92,246,0.6)", "0 0 20px rgba(139,92,246,0.3)"]
                }}
                transition={{ 
                  rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-28 h-28 rounded-full border-4 border-violet-500/20 border-t-violet-500 mx-auto mb-10"
            />
            <h2 className="text-4xl font-bold font-display text-white mb-3 tracking-tight">Massive Agent Processing</h2>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
               {currentStepIndex >= STEPS.length && !isDataReady 
                 ? "Finalizing Neural Matrix..." 
                 : "Executing Deep Generation Protocol..."}
            </p>
        </div>

        <div className="space-y-5 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-white/5 z-0" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStepIndex;
            const isCompleted = index < currentStepIndex;

            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isCompleted || isActive ? 1 : 0.15, x: 0 }}
                className={`flex items-center gap-5 relative z-10 transition-all duration-700 ${isActive ? 'scale-105 pl-2' : ''}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-700 ${
                  isCompleted ? 'bg-green-500/20 border-green-500 text-green-400' : 
                  isActive ? 'bg-violet-600 border-violet-400 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]' : 
                  'bg-black border-white/10 text-gray-600'
                }`}>
                  {isCompleted ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                </div>
                <div className="flex flex-col">
                  <span className={`text-sm font-semibold tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step.text}
                  </span>
                  {isActive && (
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: step.duration / 1000, ease: "linear" }}
                      className="h-0.5 bg-violet-500 mt-1 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AILoader;