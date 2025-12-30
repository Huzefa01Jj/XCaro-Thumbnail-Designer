import React from 'react';
import { Sparkles, Image as ImageIcon, Layout, Layers, Type, Share2, MousePointerClick, Zap, Eye, TrendingUp } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
];

export const FEATURES = [
  {
    title: "Text-to-Thumbnail AI",
    description: "Describe your idea and XCaro designs it instantly using advanced diffusion models.",
    icon: <Sparkles className="w-6 h-6 text-violet-400" />
  },
  {
    title: "Face & Image Upload",
    description: "Upload your photo — XCaro places it perfectly, removing backgrounds automatically.",
    icon: <ImageIcon className="w-6 h-6 text-pink-400" />
  },
  {
    title: "Viral Layout Intelligence",
    description: "Layouts trained on millions of high-CTR videos to maximize clicks.",
    icon: <Layout className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Multiple Variations",
    description: "Generate 4 distinct variations in one click and choose the winner.",
    icon: <Layers className="w-6 h-6 text-indigo-400" />
  },
  {
    title: "Smart Text Styling",
    description: "Bold fonts, outlines, and shadows applied automatically for readability.",
    icon: <Type className="w-6 h-6 text-fuchsia-400" />
  },
  {
    title: "Platform-Ready Export",
    description: "Perfect sizes for YouTube, Shorts, Instagram, and TikTok.",
    icon: <Share2 className="w-6 h-6 text-cyan-400" />
  }
];

export const PROBLEM_SOLUTION = {
  problem: [
    { text: "Low CTR (Click Through Rate)", icon: <MousePointerClick className="w-5 h-5 text-red-400" /> },
    { text: "Hours wasted in Photoshop", icon: <Zap className="w-5 h-5 text-red-400" /> },
    { text: "Expensive designer fees", icon: <TrendingUp className="w-5 h-5 text-red-400" /> }
  ],
  solution: [
    { text: "AI Optimized Visual Hierarchy", icon: <Eye className="w-5 h-5 text-green-400" /> },
    { text: "Professional Results in Seconds", icon: <Zap className="w-5 h-5 text-green-400" /> },
    { text: "Smart Contrast & Emotion Detection", icon: <Sparkles className="w-5 h-5 text-green-400" /> }
  ]
};
