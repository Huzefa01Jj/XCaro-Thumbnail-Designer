import React from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AILogic from '../components/AILogic';
import CTA from '../components/CTA';
import { PageView } from '../types';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <div onClick={(e) => {
        // Intercept clicks on buttons inside Hero/CTA to navigate
        const target = e.target as HTMLElement;
        if (target.closest('button')?.textContent?.includes('Generate')) {
            onNavigate('generate');
        }
        if (target.closest('button')?.textContent?.includes('Get Started')) {
            onNavigate('generate');
        }
        if (target.closest('button')?.textContent?.includes('Create Your First')) {
            onNavigate('generate');
        }
      }}>
        <Hero />
      </div>
      
      {/* Social Proof Bar */}
      <div className="border-y border-white/5 bg-black/50 backdrop-blur-sm py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-widest">Powering Top Creators From</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['YouTube', 'Twitch', 'TikTok', 'Patreon', 'Instagram'].map(platform => (
              <span key={platform} className="text-xl font-bold font-display">{platform}</span>
            ))}
          </div>
        </div>
      </div>

      <ProblemSolution />
      <Features />
      <HowItWorks />
      <AILogic />
      <div onClick={(e) => {
         const target = e.target as HTMLElement;
         if (target.closest('button')) {
             onNavigate('generate');
             window.scrollTo(0, 0);
         }
      }}>
          <CTA />
      </div>
    </>
  );
};

export default Home;